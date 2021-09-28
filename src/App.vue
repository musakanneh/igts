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
* {
  margin: auto;
  padding: auto;
}
html {
  scroll-behavior: smooth;
}

.add-spacing-up-and-down {
  padding: 6rem 0;
}

.add-spacing__down{
  padding-bottom: 6rem;
}

#app {
  display: flex;
  flex: auto;
  width: 100%;
  font-family: "Open Sans", Helvetica, Arial, sans-serif;
  flex-direction: column;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.container {
  width: 1200px;
  margin: auto;
  min-height: 100%;
}

p {
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 22px;
}

.drop-down-indicator {
  border-left: 7px solid transparent;
  border-top: 7px solid #6ca714;
  border-right: 7px solid transparent;
  border-bottom: 7px solid transparent;
  margin: 10px 0 0 0;
}

.flex-item {
  display: flex;
}
</style>
