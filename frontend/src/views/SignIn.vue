<template>
  <div class="sign-in">
    <v-form ref="form">
      <v-text-field
        v-model="username"
        label="Username"
        name="username"
        required
      ></v-text-field>

      <v-text-field
        type="password"
        v-model="password"
        label="Password"
        name="password"
        required
      ></v-text-field>

      <v-btn type="submit" color="amber darken-3" dark @click.prevent="submit"
        >Submit</v-btn
      >
      <div>{{ resultMessage }}</div>
    </v-form>
  </div>
</template>

<script>
export default {
  name: "SignIn",
  data: () => ({
    username: "",
    password: "",
    resultMessage: "",
  }),
  methods: {
    submit: function() {
      const component = this;
      const username = this.username;
      const password = this.password;

      this.$axios
        .post("/api/auth/signin", {
          username,
          password,
        })
        .then((res) => {
          component.$router.push({ path: "beer" });
        })
        .catch((err) => {
          alert("로그인 실패!");
        });
    },
  },
};
</script>
