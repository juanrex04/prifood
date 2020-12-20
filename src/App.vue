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
            <b-nav-item :to="{ name: 'About' }">Acerca de PriFood</b-nav-item>
            <b-nav-item :to="{ name: 'Products' }">Productos</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
    <b-container>
      <transition
        mode="out-in"
        enter-active-class="animate__animated animate__backInDown"
      >
        <router-view />
      </transition>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  max-height: 200vw;
  min-height: 100vh;
  background-image: linear-gradient(
    to bottom,
    rgba(233, 206, 81),
    rgba(232, 74, 42)
  );
}
#navBar {
  background-image: linear-gradient(to bottom, rgba(144, 118, 176), #1f2353);
  font-weight: 800;
}
#logo {
  width: 50px;
}
</style>
