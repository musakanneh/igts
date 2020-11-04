<template>
  <body>
    <main>
      <article>
        <h1>
          Internet Generation Technology Solutions <br />
          Africa Limited
        </h1>

        <p>
          Building 100 software engineers by 2023 through the techaware
          fellowship program <br />
          that will use ICT for sustainable development.
        </p>

        <section>
          <Button
            :isFullWidth="false"
            label="Explore more"
            width="150px"
          ></Button>
          <div class="view-services2">
            <a href="">Explore</a>
          </div>
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
@media only screen and (max-width: 900px) {
  body {
    margin: 0 !important;
    padding: 0 !important;
    min-width: 111% !important;
  }

  * {
    display: block !important;
  }
}

body {
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.712)),
    url("../assets/bg.jpeg");
  background-repeat: no-repeat;
  background-attachment: fixed;
  margin: auto;
  position: center;
  background-size: cover;
  z-index: 1;
  text-align: center;

  main {
    display: flex;
    flex: auto;
    width: auto;
    padding: 8%;
    margin: auto;

    article {
      width: 100%;
    }

    p {
      color: #fbfbfb;
      line-height: 30px;
      padding: 20px 0;
      font-size: 16px;
      font-weight: 400;
    }

    h1 {
      font-size: 35px;
      color: #fbfbfb;
      text-align: center;
      font-weight: 600;
      transition: 200ms;
      white-space: nowrap;
    }

    section {
      width: 35%;
      margin: auto;
      justify-content: space-between;
      display: flex;

      .view-services2 {
        padding: 10px;
        cursor: pointer;
        border: 1px solid #3b85fc;
        box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.06);
        border-radius: 3px;
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
