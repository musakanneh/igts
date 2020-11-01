<template>
<div id="app">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" crossorigin="anonymous" />

    <Navbar />
    <router-view />
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
    margin: 0;
    font-family: 'Montserrat', sans-serif;
}

#boapp {
    display: flex;
    flex: auto;
    width: 100%;
    flex-direction: column;
    padding: 0;
    margin: 0;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
</style>
