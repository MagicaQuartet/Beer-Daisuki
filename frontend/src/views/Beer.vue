<template>
  <div class="beer d-flex flex-column align-center">
    <v-text-field
      class="search-input mt-8 px-4 dense rounded-pill"
      v-model="keyword"
      placeholder="Search"
      autofocus
      background-color="amber lighten-5"
      color="amber darken-4"
      clearable
      solo
      prepend-inner-icon="mdi-magnify"
    >
    </v-text-field>
    <div class="search-list">
      <beer-item v-for="beer in filteredBeerList" v-bind="beer" :key="beer._id">
      </beer-item>
    </div>
  </div>
</template>

<script>
import BeerItem from "@/components/BeerItem.vue";

export default {
  name: "Beer",
  components: { BeerItem },
  data: function() {
    return {
      keyword: "",
      beerList: [],
    };
  },
  computed: {
    lowerCaseKeyword: function() {
      return this.keyword.toLowerCase();
    },
    filteredBeerList: function() {
      return this.beerList.filter(
        (beer) =>
          Object.values(beer.name).some(
            (_name) => _name.toLowerCase().indexOf(this.lowerCaseKeyword) > -1
          ) ||
          beer.type.toLowerCase().indexOf(this.lowerCaseKeyword) > -1 ||
          beer.brewery.toLowerCase().indexOf(this.lowerCaseKeyword) > -1 ||
          beer.country.toLowerCase().indexOf(this.lowerCaseKeyword) > -1
      );
    },
  },
  created: function() {
    this.$store.dispatch("beer/loadList").then(() => {
      this.beerList = this.$store.getters["beer/getList"];
    });
  },
  methods: {},
};
</script>

<style scoped>
.search-input {
  max-width: 512px;
  width: 100%;
}
</style>
