<template>
  <div class="temp">
    <form @submit.prevent="onSubmit">
      <div class="login-form">
        <div class="form-input">
          <label for="beer-en">맥주 이름(영문)</label>
          <input
            v-model="params.name.en"
            type="text"
            name="beer-en"
            id="beer-en"
          />
        </div>
        <div class="form-input">
          <label for="beer-ko">맥주 이름(국문)</label>
          <input
            v-model="params.name.ko"
            type="text"
            name="beer-ko"
            id="beer-ko"
          />
        </div>
        <div class="form-input">
          <label for="type">종류</label>
          <input v-model="params.type" type="text" name="type" id="type" />
        </div>
        <div class="form-input">
          <label for="brewery">제조사</label>
          <input
            v-model="params.brewery"
            type="text"
            name="brewery"
            id="brewery"
          />
        </div>
        <div class="form-input">
          <label for="country">제조국가</label>
          <input
            v-model="params.country"
            type="text"
            name="country"
            id="country"
          />
        </div>
        <div class="form-input">
          <label for="beer-image">맥주 이미지</label>
          <input
            v-model="params.imgSrc.beer"
            type="text"
            name="beer-image"
            id="beer-image"
          />
        </div>
        <div class="form-input">
          <label for="brewery-image">제조사 이미지</label>
          <input
            v-model="params.imgSrc.brewery"
            type="text"
            name="brewery-image"
            id="brewery-image"
          />
        </div>
        <input type="submit" />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Temp",
  data: function() {
    return {
      params: {
        name: {
          en: "",
          ko: "",
        },
        type: "",
        brewery: "",
        country: "",
        imgSrc: {
          beer: "",
          brewery: "",
        },
      },
    };
  },
  methods: {
    onSubmit: function() {
      this.$store.dispatch("beer/addBeer", this.params).then(() => {
        this.params = {
          params: {
            name: {
              en: "",
              ko: "",
            },
            type: "",
            brewery: "",
            country: "",
            imgSrc: {
              beer: "",
              brewery: "",
            },
          },
        };
      });
    },
  },
};
</script>
