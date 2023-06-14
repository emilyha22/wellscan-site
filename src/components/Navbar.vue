<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <a class="navbar-brand" @click="router.push('/')"><img src="../assets/wellscan_branding.png" /></a>
    <v-btn class="navbar-toggler" @click="toggleDropDown" elevation="0">
      <span class="navbar-toggler-icon"></span>
    </v-btn>
      <v-navigation-drawer v-model="dropDown" location="bottom" temporary>
        <v-list>
          <v-list-item class="nav-item" :class="homeActive" @click="handlePageChange('/')">
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>
          <v-list-item class="nav-item" :class="calculatorActive" @click="handlePageChange('/calculator')">
            <v-list-item-title>Calculator</v-list-item-title>
          </v-list-item>
          <v-list-item class="nav-item" :class="searchActive" @click="handlePageChange('/search')">
            <v-list-item-title>Food Lookup</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

    <div class="collapse navbar-collapse" id="navbarSupportedContent" :key="navKey">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item"
            :class="homeActive">
          <a class="nav-link" @click.prevent="handlePageChange('/')">Home</a>
        </li>
        <li class="nav-item" :class="calculatorActive">
          <a class="nav-link" @click.prevent="handlePageChange('/calculator')">Calculator</a>
        </li>
        <li class="nav-item" :class="searchActive">
          <a class="nav-link" @click.prevent="handlePageChange('/food-search')">Food Lookup</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import type { Ref } from "vue";
import router from "../router";

const curPage = router.currentRoute.value.path;
const navKey: Ref<number> = ref(0);
const dropDown: Ref<boolean> = ref(false);
const homeActive: Ref<object> = ref({
  active: false
});
const calculatorActive: Ref<object> = ref({
  active: false
});
const searchActive: Ref<object> = ref({
  active: false
});

onMounted(() => {
  if (curPage === '/') {
    homeActive.value = {
      active: true
    };
  } else if (curPage === '/calculator') {
    calculatorActive.value = {
      active: true
    };
  } else if (curPage === '/search') {
    searchActive.value = {
      active: true
    };
  }
})

const toggleDropDown = () => {
  dropDown.value = !dropDown.value;
};

const handlePageChange = async (path:string) => {
if (path === '/') {
  homeActive.value = {
    active: true
  };
  calculatorActive.value = {
    active: false
  };
  searchActive.value = {
    active: false
  };
} else if (path === '/calculator') {
  homeActive.value = {
    active: false
  };
  calculatorActive.value = {
    active: true
  };
  searchActive.value = {
    active: false
  };
} else if (path === '/search') {
  homeActive.value = {
    active: false
  };
  calculatorActive.value = {
    active: false
  };
  searchActive.value = {
    active: true
  };
}
await router.push(path);
navKey.value++;
};
</script>
<style scoped>
.nav-item {
  cursor: pointer;
}
</style>