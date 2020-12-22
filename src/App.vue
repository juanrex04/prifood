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
        enter-active-class="animate__animated animate__zoomIn"       
        leave-active-class="animate__animated animate__zoomOut"
      >
        <router-view />
      </transition>
      <about/>
    </b-container>
  </div>
</template>

<script>
import about from '@/components/About.vue'
export default {
  data() {
    return {};
  },
  components:{
    about
  }
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
  background: rgba(19, 19, 47);
  font-weight: 800;
}
#logo {
  width: 50px;
}
h1{
  color: white;
}
h4{
  color:white;
}
</style>
