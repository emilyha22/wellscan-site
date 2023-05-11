<template>
  <div id="app">
    <v-app>
      <section class="container-fluid header">
        <div class="container">
          <div
            class="row header-text justify-content-center align-items-center"
          >
            <div class="col-lg-10 header-text">
              <h1 class="text-center">
                <span id="bold-header">Lookup</span> the Category and HER Rank
                for Common Foods
              </h1>
            </div>
            <div class="col-lg-12">
              <h3>Search for a Food:</h3>

              <fieldset>
                <ais-instant-search
                  :search-client="searchClient"
                  index-name="dev_FOOD"
                  :insights="true"
                >
                  <aids-configure :hits-per-page="8" />
                  <div class="search-panel">
                    <div class="sear-panel__results">
                      <div class="searchbox">
                        <ais-search-box
                          v-model="searchQuery"
                          placeholder="Search for a food"
                          autofocus
                        />
                      </div>
                      <v-list
                        v-if="
                          searchQuery.length > 0 &&
                          Object.keys(selectedItem).length === 0
                        "
                      >
                        <ais-hits>
                          <template v-slot:item="{ item }">
                            <v-list-item
                              @click="updateItem(item)"
                              class="pa-0 text-body-1"
                            >
                              <ais-highlight
                                attribute="ITEM CARD NAME"
                                :hit="item"
                              />
                            </v-list-item>
                          </template>
                        </ais-hits>
                      </v-list>
                    </div>
                  </div>
                </ais-instant-search>
              </fieldset>
            </div>
          </div>
        </div>
      </section>
      <SelectedFood
        :selectedItem="selectedItem"
        v-if="Object.keys(selectedItem).length > 0"
        :key="selectedFoodKey"
      />
    </v-app>
  </div>
</template>

<script setup lang="ts">
import algoliasearch from "algoliasearch/lite";
import { watch } from "vue";
import { ref } from "vue";
import type { Ref } from "vue";
import SelectedFood from "../components/SelectedFood.vue";

const searchClient = ref(
  algoliasearch("ZUU3PQA9BG", "7feb18cee392e4b48112a136d6708d1a")
);
const selectedFoodKey: Ref<number> = ref(0);

const searchQuery: Ref<string> = ref("");
const selectedItem: Ref<object> = ref({});

watch(searchQuery, (val) => {
  selectedItem.value = {}; //do we want this?
});

const updateItem = (item: object) => {
  selectedItem.value = item;
  selectedFoodKey.value++;
};
</script>

<style scoped>
.header {
  height: 28rem;
}
.v-list {
  padding: 0;
  box-shadow: 0 4px 6px 0 rgba(32, 33, 36, 0.28);
  border-radius: 0, 0, 3px, 3px;
}
</style>