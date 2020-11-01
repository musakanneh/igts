<template>
<div class="home">
    <HeaderCard />
    <Offers />
    <Clients />
</div>
</template>

<script>
import HeaderCard from "../components/HeaderCard.vue";
import Offers from "../components/Offers.vue";
import Clients from "../components/Clients.vue";
export default {
    components: {
        HeaderCard,
        Offers,
        Clients
    }
};
</script>

<style lang="scss" scoped>

</style>
