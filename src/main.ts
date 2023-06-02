import { createApp } from 'vue'
import router from "./router";
import './style.css'
import App from './App.vue'
import "vuetify/styles";
import { createVuetify } from "vuetify";
import InstantSearch from 'vue-instantsearch/vue3/es';
import "instantsearch.css/themes/reset.css";
import "instantsearch.css/themes/satellite.css";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const app = createApp(App)

const vuetify = createVuetify({
    components,
    directives
});

app.use(router);
app.use(vuetify);
app.use(InstantSearch);

app.mount('#app')