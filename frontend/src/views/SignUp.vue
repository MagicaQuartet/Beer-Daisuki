<template>
  <div class="sign-in">
    <v-form ref="form">
      <v-text-field v-model="username" label="Username" required></v-text-field>

      <v-text-field
        type="password"
        v-model="password"
        label="Password"
        required
      ></v-text-field>

      <v-text-field
        type="password"
        v-model="passwordCheck"
        label="Password check"
        required
      ></v-text-field>

      <v-btn color="amber darken-3" dark @click="submit">Submit</v-btn>
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
    passwordCheck: "",
    resultMessage: "",
  }),
  methods: {
    submit: function() {
      const $vc = this;
      const username = this.username;
      const password = this.password;

      this.$axios
        .post("/api/auth/signup", {
          username,
          password,
        })
        .then((res) => {
          const success = res.data.success;
          const message = res.data.message;
          $vc.resultMessage = message;
        });
    },
  },
};
</script>
