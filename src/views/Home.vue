<template>
<div class="home">
    <HeaderCard />
    <Offers />
    <Clients />
    <Merchandise />
    
</div>
</template>

<script>
import HeaderCard from "../components/HeaderCard.vue";
import Offers from "../components/Offers.vue";
import Clients from "../components/Clients.vue";
import Merchandise from "../components/Merchandise.vue";
export default {
    components: {
        HeaderCard,
        Offers,
        Clients,
        Merchandise,
    }
};
</script>

<style lang="scss" scoped>

</style>
