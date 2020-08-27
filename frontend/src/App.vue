<template>
  <v-app>
    <v-app-bar app color="amber darken-3" dark>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <router-link
        to="/"
        class="headline ml-2 white--text font-weight-medium text-decoration-none"
      >
        Beer-Daisuki
      </router-link>

      <v-spacer></v-spacer>

      <div v-if="username === null">
        <router-link
          to="/signin"
          class="subtitle mx-2 white--text font-weight-medium text-decoration-none"
        >
          Sign in
        </router-link>

        <router-link
          to="/signup"
          class="subtitle mx-2 px-3 py-2 white--text font-weight-medium text-decoration-none rounded"
          style="border: 2px solid white;"
        >
          Sign Up
        </router-link>
      </div>
      <div v-else>
        <span class="subtitle mx-2 white--text font-weight-medium"
          >Hello, {{ username }}!</span
        >
        <a
          class="subtitle mx-2 px-3 py-2 white--text font-weight-medium text-decoration-none rounded"
          style="border: 2px white solid"
          @click.prevent="signOut"
          >Sign Out</a
        >
      </div>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" fixed temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="amber--text text--darken-4"
        >
          <v-list-item to="/" exact>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>홈</v-list-item-title>
          </v-list-item>

          <v-list-item to="/beer" exact>
            <v-list-item-icon>
              <v-icon>mdi-glass-mug-variant</v-icon>
            </v-list-item-icon>
            <v-list-item-title>맥주 검색 / 리뷰</v-list-item-title>
          </v-list-item>

          <v-list-item to="/map" exact>
            <v-list-item-icon>
              <v-icon>mdi-map</v-icon>
            </v-list-item-icon>
            <v-list-item-title>맥주 지도</v-list-item-title>
          </v-list-item>
          <v-list-item to="/temp" exact>
            <v-list-item-icon>
              <v-icon>mdi-flask-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-title>실험실</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
//import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",

  components: {
    //HelloWorld
  },

  data: () => ({
    drawer: false,
    group: "",
  }),

  computed: {
    username: function() {
      return this.$store.getters["user/getUsername"];
    },
  },

  methods: {
    signOut: async function() {
      await this.$store.dispatch("user/signOut");
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Fredoka+One&family=Noto+Sans+KR:wght@100;400;700&display=swap");
/* font-family: "Fredoka One", cursive; */
/* font-family: "Noto Sans KR", sans-serif; */
</style>
