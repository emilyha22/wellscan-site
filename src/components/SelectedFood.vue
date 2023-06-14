<template>
  <section class="container intro my-4">
    <div>
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <h3 v-show="selectedItem">
              Results: <strong>{{ selectedItem["ITEM CARD NAME"] }}</strong>
            </h3>
            <div class="results">
              <div :class="resultCSSClass">
                <p>
                  Category:
                  <strong>{{ selectedItem["HER FOOD CATEGORY"] }}</strong>
                </p>
                <p>
                  Rank: <strong>{{ resultRankText }}</strong>
                </p>
                <p
                  v-if="selectedItem['SOURCE'] && selectedItem['USDA WBSCM ID']"
                >
                  Source:
                  <strong
                    >{{ selectedItem["SOURCE"] }}
                    {{ selectedItem["USDA WBSCM ID"] }}</strong
                  >
                </p>
              </div>
              <div class="row">
                <div class="col-lg-6">
                  <div
                    class="chart"
                    v-show="
                      selectedItem['ITEM CARD NAME'] &&
                      selectedItem['Number of Items Analyzed']
                    "
                  >
                    <canvas id="resultChart" width="400" height="400"></canvas>
                  </div>
                </div>
                <div
                  class="col-lg-6"
                  v-show="selectedItem['Number of Items Analyzed']"
                >
                  <p v-if="selectedItem">
                    Total Foods Analyzed:
                    {{ selectedItem["Number of Items Analyzed"] }}
                  </p>
                  <p v-if="selectedItem">
                    Choose Often (Green): {{ numGreen }}
                  </p>
                  <p v-if="selectedItem">
                    Choose Sometimes (Yellow): {{ numYellow }}
                  </p>
                  <p v-if="selectedItem">Choose Rarely (Red): {{ numRed }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts" >
import { ComputedRef, onMounted, onUpdated, ref, watch } from "vue";
import type { Ref } from "vue";
import { computed, defineProps } from "vue";
import Chart, { ChartItem } from "chart.js/auto";

const props = defineProps({
  selectedItem: {
    type: Object,
    required: true,
  },
});

onMounted(() => {
  initChart();
});

const chart: Ref<Chart | null> = ref(null);
const results: Ref<object> = ref({});

const resultCSSClass: ComputedRef<string> = computed(() => {
  let cssClasses = "";

  const rank = props.selectedItem["HER RANK"].toLowerCase();
  const approved_ranks = ["red", "yellow", "green", "unranked"];
  if (rank && approved_ranks.includes(rank)) {
    cssClasses += " " + rank;
  } else {
    cssClasses += " rank-none";
  }
  return cssClasses;
});

const resultRankText: ComputedRef<string> = computed(() => {
  const rank = props.selectedItem["HER RANK"].toLowerCase();
  switch (rank) {
    case "green":
      return "Green - Choose Often";
      break;
    case "yellow":
      return "Yellow - Choose Sometimes";
      break;
    case "red":
      return "Red - Choose Rarely";
      break;
    case "unranked":
      return "Unranked";
      break;
    default:
      if (props.selectedItem["Number of Items Analyzed"]) {
        return "See distribution of product ranks below";
      }
      return "Not Yet Ranked";
  }
});

const numGreen: ComputedRef<number> = computed(() => {
  let p: number | string = props.selectedItem["% GREEN"];
  if (p === "") {
    p = 0;
  }
  return parseInt(
    (
      props.selectedItem["Number of Items Analyzed"] *
      (parseFloat(p.toString()) / 100)
    ).toString()
  );
});

const numYellow: ComputedRef<number> = computed(() => {
  let p: number | string = props.selectedItem["% YELLOW"].toString();
  if (p === "") {
    p = 0;
  }
  return parseInt(
    (
      props.selectedItem["Number of Items Analyzed"] *
      (parseFloat(p.toString()) / 100)
    ).toString()
  );
});

const numRed: ComputedRef<number> = computed(() => {
  let p: number | string = props.selectedItem["% RED"];
  if (p === "") {
    p = 0;
  }
  return parseInt(
    (
      props.selectedItem["Number of Items Analyzed"] *
      (parseFloat(p.toString()) / 100)
    ).toString()
  );
});

const initChart = () => {
  const canvas = document.getElementById(
    "resultChart"
  ) as HTMLCanvasElement | null;
  if (canvas) {
    const ctx = canvas.getContext("2d") as ChartItem;

    if (chart.value) {
      chart.value.destroy();
    }
    const config: any = {
      type: "doughnut",
      data: {
        labels: ["Choose Often", "Choose Sometimes", "Choose Rarely"],
        datasets: [
          {
            label: "Foods Analyzed",
            data: [
              props.selectedItem["% GREEN"],
              props.selectedItem["% YELLOW"],
              props.selectedItem["% RED"],
            ],
            backgroundColor: ["green", "yellow", "red"],
          },
        ],
      },
      options: {
        plugins: {
          labels: {
            position: "outside",
            render: (args: any) => {
              return args.value + "%";
            },
            outsidePadding: 4,
            textMargin: 4,
          },
        },
      },
    };

    chart.value = new Chart(ctx, config);
  }
};
</script>
<style scoped>
.results > div {
  padding: 20px;
  padding-bottom: 10px;
}

.unranked {
  background-color: #333;
}

.unranked * {
  color: white !important;
}

.results > div p:last-child {
  padding-bottom: 0px;
}

.green * {
  color: white !important;
}
.green {
  background-color: #4caf50 !important;
}

.yellow * {
  color: black !important;
}

.yellow {
  background-color: #ffeb3b !important;
}

.red * {
  color: white !important;
}
.red {
  background-color: #f44336 !important;
}

.chart,
#resultChart {
  width: 400px;
}

/** Definitely specific to this page. **/
.v-autocomplete__content {
  max-height: 36vh !important;
}

@media (max-width: 800px) {
  .header {
    padding: 0px 0px 100px 0px;
  }
}
</style>