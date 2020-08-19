<template>
  <v-card class="beer-item d-flex my-4 px-4 align-center" min-width="768px">
    <div class="beer-image-wrapper d-flex justify-center">
      <img class="beer-image" :src="imgSrc.beer" />
    </div>
    <v-container class="ml-6">
      <v-row>
        <v-col cols="auto">
          <span class="beer-name text-h5 font-weight-bold">{{ name.en }}</span>
          <span class="beer-type ml-4 grey--text text-subtitle-2 font-italic">{{
            type
          }}</span>
        </v-col>
        <v-spacer></v-spacer>
        <v-col class="d-flex" cols="3">
          <v-rating
            background-color="amber darken-1"
            color="amber darken-1"
            readonly
            half-increments
            half-icon="mdi-star-half-full"
            dense
            small
            :value="calculatedRating"
          ></v-rating>
          <span
            class="ml-2 mt-1 text-subtitle-2 font-weight-bold amber--text darken-4"
            >{{ calculatedRating.toFixed(1) }}</span
          >
        </v-col>
      </v-row>
      <v-row class="align-center">
        <v-col class="d-flex align-center" cols="auto">
          <img class="brewery-image" :src="imgSrc.brewery" />
          <span class="brewery-name ml-2 text-subtitle-2">{{ brewery }}</span>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {
  name: "BeerItem",
  props: ["name", "type", "brewery", "country", "rating", "imgSrc"],
  computed: {
    calculatedRating: function() {
      return this.rating.count !== 0
        ? this.rating.score / this.rating.count
        : 0;
    },
  },
};
</script>

<style scoped>
.beer-image-wrapper {
  height: 108px;
  min-width: 108px;
}

.beer-image {
  height: 100%;
}

.brewery-image {
  height: 36px;
}
</style>
