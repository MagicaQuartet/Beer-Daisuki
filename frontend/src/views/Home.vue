<template>
  <div class="home">
    <div class="bg"></div>
    <transition name="fade">
      <div class="introduce" v-if="showIntroduce">
        <h1>Beer-Daisuki</h1>
        <p>맛있는 맥주를 발견해보세요.</p>
        <p>그 맥주를 만날 수 있는 곳도 알려드릴게요.</p>
      </div>
    </transition>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {},
  data: function() {
    return {
      showIntroduce: false,
    };
  },
  mounted: function() {
    this.showIntroduce = true;
  },
};
</script>

<style scoped>
.fade-enter-active {
  transition: opacity 2s linear;
}

.fade-enter {
  opacity: 0;
}

.home {
  height: 100%;
}

.bg {
  height: 100%;

  background-image: url("../assets/images/beer-background.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: scroll;

  filter: blur(4px) brightness(0.75);
}

.introduce {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 600px;
  padding: 1.6rem 4.8rem;
  background-color: rgba(192, 192, 192, 0.4);
  box-shadow: 0px 0px 5px 5px rgba(192, 192, 192, 0.4);
}

.introduce > * {
  text-align: center;
  color: #e6e6e6;
}

.introduce > h1 {
  font-size: 3.6rem;
  font-family: "Fredoka One", cursive;
  margin: 0.8rem 0;
}

.introduce > p {
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 100;
  margin: 0;
}
</style>
