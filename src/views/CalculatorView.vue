<template>
  <section class="container calc">
    <form method="POST" action="#" id="calc-form" class="calc-form">
      <div class="calc-sec">
        <h3>Category</h3>
        <div class="row">
          <div class="radio">
            <input
              v-model="category"
              type="radio"
              name="foodType"
              id="fruitVeg"
              value="fruit-vegetable"
            />
            <label for="fruitVeg" id="fruitVeg">Fruit / Vegetable</label>
          </div>

          <div class="radio">
            <input
              v-model="category"
              type="radio"
              name="foodType"
              id="protein"
              value="protein"
            />
            <label for="protein" id="protein">Protein</label>
          </div>

          <div class="radio">
            <input
              v-model="category"
              type="radio"
              name="foodType"
              id="dairy"
              value="dairy"
            />
            <label for="dairy" id="dairy">Dairy</label>
          </div>

          <div class="radio">
            <input
              v-model="category"
              type="radio"
              name="foodType"
              id="nonDairy"
              value="non-dairy-alternative"
            />
            <label for="nonDairy" id="nonDairy">Non-Dairy Alternative</label>
          </div>

          <div class="radio">
            <input
              v-model="category"
              type="radio"
              name="foodType"
              id="beverage"
              value="beverage"
            />
            <label for="beverage" id="beverage">Beverage</label>
          </div>

          <div class="radio">
            <input
              v-model="category"
              type="radio"
              name="foodType"
              id="mixedDish"
              value="mixed-dish"
            />
            <label for="mixedDish" id="mixedDish">Mixed Dish</label>
          </div>

          <div class="radio">
            <input
              v-model="category"
              type="radio"
              name="foodType"
              id="processedPackage"
              value="snack-whole-grain"
            />
            <label for="processedPackage" id="processedPackage"
              >Whole Grain Snack</label
            >
          </div>

          <!-- <div class="radio">
                <input type="radio" name='foodType' id="dessert" value="dessert">
                <label for="dessert" id="dessert">Dessert</label>
            </div> -->

          <div class="radio">
            <input
              v-model="category"
              type="radio"
              name="foodType"
              id="grainWhole"
              value="grain-whole"
            />
            <label for="grainWhole" id="grainWhole">Whole Grain</label>
          </div>

          <div class="radio">
            <input
              v-model="category"
              type="radio"
              name="foodType"
              id="grainReg"
              value="grain"
            />
            <label for="grainReg" id="grainReg">Non-Whole Grain</label>
          </div>
        </div>
      </div>

      <div class="calc-sec">
        <div class="nutrition-div">
          <p>Saturated Fat (g)</p>
          <div class="textbox">
            <input
              v-model="satFat"
              pattern="[0-9]*"
              placeholder="Enter amount"
              inputmode="numeric"
              type="number"
              name="satfat"
              id="satfat"
            />
          </div>
        </div>

        <div class="nutrition-div">
          <p>Sodium (mg)</p>
          <div class="textbox">
            <input
              v-model="sodium"
              pattern="[0-9]*"
              placeholder="Enter amount"
              inputmode="numeric"
              type="number"
              name="sodium"
              id="sodium"
            />
          </div>
        </div>

        <div class="nutrition-div">
          <v-switch v-model="sugarSwitch" hide-details inset>
            <template v-slot:label>
              <span class="switch-label">
                {{ sugarSwitch ? "Total Sugar (g)" : "Added Sugar (g)" }}
              </span>
            </template>
          </v-switch>

          <div class="textbox">
            <input
              v-model="sugar"
              pattern="[0-9]*"
              placeholder="Enter amount"
              inputmode="numeric"
              type="number"
              name="sugars"
              id="sugars"
            />
          </div>
        </div>

        <div class="nutrition-div">
          <p>Rank</p>
          <div class="textbox" v-if="calculated">
            <span id="result" class="badge" :class="badgeClass"
              >choose {{ resRank }}<span id="rank"></span
            ></span>
          </div>
        </div>
      </div>
      <button
        @click.prevent="handleCalculate"
        class="btn btn-block btn-primary"
        type="submit"
      >
        calculate
      </button>
      <button
        @click.prevent="handleReset"
        id="btn_reset"
        class="btn btn-block btn-outline-secondary"
        type="reset"
      >
        reset
      </button>
    </form>
  </section>
</template>

<script setup lang="ts">
import axios, { AxiosError, AxiosResponse } from "axios";
import { watch } from "vue";
import { Ref } from "vue";
import { ref } from "vue";

const satFat: Ref<number | null> = ref(null);
const sodium: Ref<number | null> = ref(null);
const sugar: Ref<number | null> = ref(null);
const sugarType: Ref<string | null> = ref("added");
const sugarSwitch: Ref<boolean> = ref(false);
const category: Ref<string> = ref("");
const calculated: Ref<boolean> = ref(false);
const badgeClass: Ref<string> = ref("");
const resRank: Ref<string> = ref("");

watch(sugarSwitch, () => {
  if (sugarSwitch.value) {
    sugarType.value = "total";
  } else {
    sugarType.value = "added";
  }
});

const handleCalculate = async () => {
  if (
    satFat.value === null ||
    sodium.value === null ||
    sugar.value === null ||
    category.value === ""
  ) {
    return;
  }
  console.log("Submitted");
  let sugars: number = 0,
    added_sugars: number = 0;
  if (sugarType.value === "added") {
    added_sugars = sugar.value;
  } else if (sugarType.value === "total") {
    sugars = sugar.value;
  }

  let endpoint: string =
    "https://v2.api.wellscan.io/api/foods/rankFromNuts/" +
    category.value +
    "/" +
    satFat.value +
    "/" +
    sodium.value +
    "/" +
    added_sugars +
    "/" +
    sugars;
  console.log(endpoint);
  const response: AxiosResponse | void = await axios
    .get(endpoint)
    .catch((error: AxiosError) => {
      console.log(error);
      return;
    });
  if (response) {
    updateRankDisplay(response.data.rank);
    calculated.value = true;
  }
};

const handleReset = () => {
  satFat.value = null;
  sodium.value = null;
  sugar.value = null;
  sugarType.value = "added";
  category.value = "";
  calculated.value = false;
};

const updateRankDisplay = (rank: string) => {
  resRank.value = rank;
  badgeClass.value = `badge--${rank.toLowerCase()}`;
};
</script>

<style scoped>
#result {
  font-size: 1.25rem;
}

.switch-label {
  opacity: 1 !important;
}

label {
  opacity: 1 !important;
}
</style>