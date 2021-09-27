<template>
  <div id="app">
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.2.0/css/all.css"
      integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ"
      crossorigin="anonymous"
    />
    <Navbar />

    <transition
      mode="out-in"
      enter-active-class="animate__animated animate_fadeIn 5s"
      leave-active-class="animate__animated animate_fadeOut 5s"
    >
      <router-view />
    </transition>
    <Footer />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "home",
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style>
/* @import url("https://fonts.googleapis.com/css?family=Raleway:300,700"); */

* {
  margin: auto;
  padding: auto;
}
html {
  scroll-behavior: smooth;
}

.add-spacing-up-and-down {
  padding: 4rem 0;
  border: 1px solid red;
}

#app {
  display: flex;
  flex: auto;
  width: 100%;
  font-family: "Montserrat", sans-serif;
  flex-direction: column;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
