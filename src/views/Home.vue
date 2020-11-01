<template>
<div class="home">
    <HeaderCard />
    <Offers />
    <Clients />
    <Merchandise />
    <Team />
    <Contact />
</div>
</template>

<script>
import HeaderCard from "../components/HeaderCard.vue";
import Offers from "../components/Offers.vue";
import Clients from "../components/Clients.vue";
import Merchandise from "../components/Merchandise.vue";
import Team from "../components/Team.vue";
import Contact from "../components/Contact.vue";

export default {
    components: {
        HeaderCard,
        Offers,
        Clients,
        Merchandise,
        Team,
        Contact,
    },
};
</script>

<style lang="scss" scoped></style>
