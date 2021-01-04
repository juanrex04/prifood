<template>
  <div id="app">
    <b-navbar id="navBar" toggleable="lg" type="dark">
      <b-container>
        <b-navbar-toggle target="nav-collapse"> </b-navbar-toggle>
        <b-navbar-brand :to="{ name: 'Home' }">
          <b-img
            id="logo"
            fluid
            alt="Fluid image"
            rounded="circle"
            :src="require('@/assets/img/prifood.jpeg')"
          ></b-img>
          PRIFOOD</b-navbar-brand
        >
        <b-collapse is-nav id="nav-collapse">
          <b-navbar-nav>
            <b-nav-item :to="{ name: 'Products' }">Productos</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
    <b-container>
      <transition
        mode="out-in"
        enter-active-class="animate__animated animate__fadeIn"
        leave-active-class="animate__animated animate__fadeOut"
      >
        <router-view />
      </transition>
      <about />
    </b-container>
  </div>
</template>

<script>
import about from "@/components/About.vue";
export default {
  data() {
    return {};
  },
  components: {
    about,
  },
};
</script>

<style lang="scss">
body {
  background: linear-gradient(to bottom, rgba(233, 206, 81), rgba(232, 74, 42))
  no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  text-align: center;
  position: relative;
}
#app {
  text-align: center;
  align-items: center;
}
#navBar {
  background: linear-gradient(to right, rgba(31, 35, 83), rgba(144, 118, 176))
    no-repeat center center fixed;
  font-weight: 800;
}
#logo {
  width: 50px;
}
h1 {
  color: white;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
}
h4 {
  color: white;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
}
h6{
  color: white;
}
p{
  color: white;
}
</style>
