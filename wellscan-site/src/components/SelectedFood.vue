<template>
    <section class="container intro">
        <div>
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <h3 v-show="selectedItem">Results: <strong>{{ selectedItem['ITEM CARD NAME'] }}</strong></h3>
                        <div class="results">
                            <div :class="resultCSSClass">
                                <p>Category: <stong>{{ selectedItem['HER FOOD CATEGORY'] }}</stong>
                                </p>
                                <p>Rank: <strong>{{ resultRankText }}</strong></p>
                                <p v-if="selectedItem['SOURCE'] && selectedItem['USDA WBSCM ID']">
                                    Source: <strong>{{ selectedItem['SOURCE'] }} {{ selectedItem['USDA WBSCM ID']
                                    }}</strong></p>
                            </div>
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="chart" v-show="selectedItem['ITEM CARD NAME'] && selectedItem['Number of Items Analyzed']">
                                        <canvas id="resultChart" width="400" height="400"></canvas>
                                    </div>
                                </div>
                                <div class="col-lg-6" v-show="selectedItem['Number of Items Analyzed']">
                                <p v-if="selectedItem">Total Foods Analyzed: {{ selectedItem["Number of Items Analyzed"] }}</p>
                                <p v-if="selectedItem">Choose Often (Green): {{ numGreen }}</p>
                                <p v-if="selectedItem">Choose Sometimes (Yellow): {{ numYellow }}</p>
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

<script setup lang="ts">
import { ComputedRef } from 'vue';
import { computed, defineProps } from 'vue';


const props = defineProps({
    selectedItem: {
        type: Object,
        required: true
    }

})

const resultCSSClass: ComputedRef<string> = computed(() => {
    let cssClasses = '';

    const rank = props.selectedItem['HER RANK'].toLowerCase();
    const approved_ranks = ['red', 'yellow', 'green', 'unranked'];
    if (rank && approved_ranks.includes(rank)) {
        cssClasses += ' ' + rank;
    } else {
        cssClasses += ' rank-none';
    }
    console.log(cssClasses)
    return cssClasses;
})

const resultRankText: ComputedRef<string> = computed(() => {
    const rank = props.selectedItem['HER RANK'].toLowerCase();
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
            if (props.selectedItem['Number of Items Analyzed']) {
                return "See distribution of product ranks below";

            }
            return "Not Yet Ranked";

    }
})

const numGreen: ComputedRef<number> = computed(() => {
    const p: number = props.selectedItem['% GREEN']
    return parseInt(props.selectedItem['Number of Items Analyzed'] * (parseFloat(p) / 100));
})

const numYellow: ComputedRef<number> = computed(() => {
    const p: number = props.selectedItem['% YELLOW']
    return parseInt(props.selectedItem['Number of Items Analyzed'] * (parseFloat(p) / 100));
})

const numRed: ComputedRef<number> = computed(() => {
    const p: number = props.selectedItem['% RED']
    return parseInt(props.selectedItem['Number of Items Analyzed'] * (parseFloat(p) / 100));
})

</script>