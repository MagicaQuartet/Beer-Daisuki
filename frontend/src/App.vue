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

      <router-link
        to="/signin"
        class="subtitle mx-2 white--text font-weight-medium text-decoration-none"
      >
        Sign in
      </router-link>

      <router-link
        to="/signup"
        class="subtitle mx-2 px-2 py-1 white--text font-weight-medium text-decoration-none rounded"
        style="border: 2px solid white;"
      >
        Sign Up
      </router-link>
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
    group: ""
  })
};
</script>
