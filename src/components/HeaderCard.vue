<template>
  <body>
    <main>
      <article>
        <h1>Internet Generation Technology Solutions</h1>
        <p>
          Building 100 software engineers by 2023 through the techaware
          fellowship program <br />
          that will use ICT for sustainable development.
        </p>
        <section class="btn-sec">
          <Button
            :isFullWidth="false"
            label="Explore more"
            width="150px"
          ></Button>
        </section>
      </article>
    </main>
  </body>
</template>

<script>
import Button from "../components/Button.vue";
export default {
  components: {
    Button,
  },
};
</script>

<style lang="scss" scoped>
body {
  background-color: rgb(2, 32, 60);
  text-align: center;

  main {
    padding: 12% 10% 10% 10%;

    article {
      width: 100%;
    }

    p {
      color: #fbfbfbe0;
      line-height: 30px;
      padding: 20px 0;
      font-size: 16px;
      font-weight: 400;
    }

    h1 {
      font-size: 40px;
      line-height: 50px;
      color: #fbfbfbe0;
      text-align: center;
      font-weight: 600;
    }

    section {
      margin-top: 20px !important;
    }
  }
}
</style>