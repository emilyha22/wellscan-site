// This file is intended to load on the calculator page.
import { createApp } from 'vue'
import './src/style.css'
import NutritionCalculator from './src/components/NutritionCalculator.vue'

import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const app = createApp(NutritionCalculator);

const vuetify = createVuetify({
    components,
    directives
});

app.use(vuetify);

app.mount('#calculator-app');