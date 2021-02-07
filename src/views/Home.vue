<template>
<div class="home">
    <HeaderCard />
    <Offers />
    <Clients />
    <Merchandise />
    <Team />
   
</div>
</template>

<script>
import HeaderCard from "../components/HeaderCard.vue";
import Offers from "../components/Offers.vue";
import Clients from "../components/Clients.vue";
import Merchandise from "../components/Merchandise.vue";
import Team from "../components/Team.vue";

export default {
    name: 'Home',
    components: {
        HeaderCard,
        Offers,
        Clients,
        Merchandise,
        Team,
    },
};
</script>

<style lang="scss" scoped>

</style>
