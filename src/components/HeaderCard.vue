<template>
  <body>
    <main>
      <article>
        <h1>
          Internet Generation Technology Solutions <br />
          Africa Limited (IGTS)
        </h1>
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
  background: rgb(2, 32, 60);
  text-align: center;

  main {
    display: flex;
    flex: auto;
    width: auto;
    padding: 10%;
    margin: auto;

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
      transition: 200ms;
      white-space: nowrap;
    }

    section {
      margin-top: 30px !important;
      width: 35%;
      margin: auto;
      justify-content: space-between;
      display: flex;

      .view-services2 {
        padding: 10px;
        cursor: pointer;
        border: 1px solid #3b85fc;
        box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.06);
        width: 40%;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;

        a {
          color: #fff;
          height: 45px;
          text-decoration: none;
        }
        &:hover {
          background: #3b85fc;
          transition: 1s ease;
        }
      }
    }
  }
}
</style>
