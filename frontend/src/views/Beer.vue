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
      <beer-item
        v-for="beer in filteredBeerList"
        v-bind="beer"
        :key="beer.name.en"
      >
      </beer-item>
    </div>
  </div>
</template>

<script>
import BeerItem from "@/components/BeerItem.vue";

export default {
  name: "Beer",
  components: { BeerItem },
  data: () => ({
    keyword: "",
    beerList: [
      // 임시 데이터
      // 추후에 서버에서 불러오는 형식으로 바꿀 것
      {
        name: { en: "Stella Artois", ko: "스텔라 아르투아" },
        brewery: "Stella Artois",
        country: "Belgium",
        type: "Lager",
        beerImg: "https://sc01.alicdn.com/kf/UT8cWJsXQBaXXcUQpbX7.png",
        breweryImg:
          "https://upload.wikimedia.org/wikipedia/en/thumb/3/37/Stella_Artois_logo.svg/220px-Stella_Artois_logo.svg.png",
        rating: 3.3
      },
      {
        name: { en: "Fire Rock", ko: "파이어 락" },
        brewery: "Kona Brewing Co.",
        country: "United States",
        type: "Pale Ale",
        beerImg:
          "https://thefullpint.com/wp-content/uploads/2009/11/KON_Fire-Rock_bottle-pour.jpeg",
        breweryImg:
          "https://beerpulse.com/wp-content/uploads/2011/09/Kona-high-res-logo-2.jpg",
        rating: 4.6
      },
      {
        name: { en: "Big Eye", ko: "빅 아이" },
        brewery: "Ballast Point Brewing Company",
        country: "United States",
        type: "IPA",
        beerImg:
          "https://i.pinimg.com/originals/31/c6/dd/31c6ddc97d3a865f5f72df7167afab1e.png",
        breweryImg:
          "https://ballastpoint.com/wp-content/themes/ballastpoint/assets/img/bp-logo-color.svg",
        rating: 4.1
      },
      {
        name: { en: "Sculpin", ko: "스컬핀" },
        brewery: "Ballast Point Brewing Company",
        country: "United States",
        type: "IPA",
        beerImg:
          "https://ballastpoint.com/wp-content/uploads/2018/05/12_Sculpin-2.png",
        breweryImg:
          "https://ballastpoint.com/wp-content/themes/ballastpoint/assets/img/bp-logo-color.svg",
        rating: 4.3
      },
      {
        name: { en: "Stone IPA", ko: "스톤 IPA" },
        brewery: "Stone Brewing",
        country: "United States",
        type: "IPA",
        beerImg:
          "https://i1.wp.com/absolutebeer.com/wp-content/uploads/2016/08/2016_0816_Stone_IPA_Photo.jpg?fit=640%2C640&ssl=1",
        breweryImg:
          "https://media-exp1.licdn.com/dms/image/C560BAQFEG0E8akkkIg/company-logo_200_200/0?e=2159024400&v=beta&t=f7qCePsyiQAPjdQlTdfE_iZB2fK096uSl5LwWyHPY5Q",
        rating: 4.7
      },
      {
        name: { en: "Kronenbourg 1664 Blanc", ko: "크로넨버그 1664 블랑" },
        brewery: "Brasseries Kronenbourg",
        country: "France",
        type: "Wheat Beer",
        beerImg:
          "https://i.pinimg.com/originals/d4/ea/79/d4ea79f12443a5510aaf1c267d9aa464.jpg",
        breweryImg:
          "https://upload.wikimedia.org/wikipedia/fr/thumb/0/0d/KRO_LogoGroup2014_HD.png/280px-KRO_LogoGroup2014_HD.png",
        rating: 3.9
      },
      {
        name: { en: "Cass Fresh", ko: "카스 프레시" },
        brewery: "Oriental Brewery Co., Ltd",
        country: "South Korea",
        type: "Lager",
        beerImg:
          "https://cdn11.bigcommerce.com/s-55de4/images/stencil/1280x1280/products/1182/2582/cass_beer__12430.1511516563.png?c=2?imbypass=on",
        breweryImg:
          "https://upload.wikimedia.org/wikipedia/commons/e/e1/Oriental_Brewery_Co.%2CLtd._logo.jpg",
        rating: 1.2
      }
    ]
  }),
  computed: {
    lowerCaseKeyword() {
      return this.keyword.toLowerCase();
    },
    filteredBeerList() {
      return this.beerList.filter(
        beer =>
          Object.values(beer.name).some(
            _name => _name.toLowerCase().indexOf(this.lowerCaseKeyword) > -1
          ) ||
          beer.type.toLowerCase().indexOf(this.lowerCaseKeyword) > -1 ||
          beer.brewery.toLowerCase().indexOf(this.lowerCaseKeyword) > -1 ||
          beer.country.toLowerCase().indexOf(this.lowerCaseKeyword) > -1
      );
    }
  },
  methods: {}
};
</script>

<style scoped>
.search-input {
  max-width: 512px;
  width: 100%;
}
</style>
