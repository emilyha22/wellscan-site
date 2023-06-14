// This file is intended to load on the calculator page.
import { createApp } from 'vue'
import './src/style.css'
import FoodSearch from './src/components/FoodSearch.vue'

import InstantSearch from 'vue-instantsearch/vue3/es';
import "instantsearch.css/themes/reset.css";
import "instantsearch.css/themes/satellite.css";

import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const app = createApp(FoodSearch);

const vuetify = createVuetify({
    components,
    directives
});

app.use(vuetify);
app.use(InstantSearch);

app.mount('#food-search-app');