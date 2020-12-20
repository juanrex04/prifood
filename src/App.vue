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
          PRIFOOD</b-navbar-brand>
        <b-collapse is-nav id="nav-collapse">
          <b-navbar-nav>
            <b-nav-item :to="{ name: 'About' }">Acerca de PriFood</b-nav-item>
            <b-nav-item :to="{ name: '' }">Productos</b-nav-item>
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
  return {
    
  }
},
};
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  min-height: 100vh;
  max-height: 200vh;
  background-color: #9076b0;
}
#navBar {
  background-color: #1f2353;
  font-weight: 800;
}
#logo{
  width: 50px;
}
</style>
