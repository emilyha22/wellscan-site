<template>
  <v-app>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Arvo:ital,wght@0,400;0,700;1,400;1,700&family=Roboto:wght@400;500;700&display=swap"
        rel="stylesheet"
      />

      <!-- Bootstrap CSS -->
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossorigin="anonymous"
      />

      <link rel="stylesheet" href="../style.css" />
      <title>WellSCAN - Nutrition Ranking technology for Food Banks and Food Pantries</title>
    </head>
    <Navbar />
    <RouterView />
  </v-app>
</template>

<script lang="ts" setup >
import { RouterLink, RouterView } from "vue-router";
import HomeView from "./views/HomeView.vue";
import CalculatorView from "./views/CalculatorView.vue";
import Navbar from "./components/Navbar.vue";
</script>