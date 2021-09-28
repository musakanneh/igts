<template>
  <div class="home">
    <HeaderCard />
    <Offers />
  </div>
</template>

<script>
import HeaderCard from "../components/HeaderCard.vue";
import Offers from "../components/Offers.vue";

export default {
  name: "Home",
  components: {
    HeaderCard,
    Offers,
  },
};
</script>

<style lang="scss" scoped>
</style>
