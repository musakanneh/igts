<template>
  <body>
    <main>
      <article>
        <h1>Innovation & Developers Campus</h1>
        <p>
           All you can get and want
        </p>
        <section class="btn-sec">
          <Button
            :isFullWidth="false"
            label="Explore More"
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
      text-align: left;
    }

    p {
      color: #fbfbfbe0;
      line-height: 30px;
      padding: 20px 0;
      font-size: 16px;
      font-weight: 400;
    }

    h1 {
      font-size: 30px;
      color: #fbfbfbe0;
      font-weight: bolder;
    }

    section {
      margin-top: 20px !important;
    }
  }
}
</style>