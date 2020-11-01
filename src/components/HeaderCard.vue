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
          <div class="view-services">
            <a href="">View Services</a>
          </div>
          <div><a href="">Learn more</a></div>
        </section>
      </article>
    </main>
  </body>
</template>

<script>
export default {
  components: {},
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
      color: white;
      line-height: 30px;
      padding: 20px 0;
      color: #fbfbfb;
      font-size: 14px;
      font-weight: 400;
    }

    h1 {
      font-size: 30px;
      color: #fff;
      text-align: center;
      font-weight: 600;
      transition: 200ms;
      white-space: nowrap;
    }

    section {
      width: 30%;
      margin: auto;
      display: flex;

      .view-services {
        background-color: #3b85fc;

        &:hover {
          background: blue;
          border: 1px solid blue;
        }
      }

      div {
        border: 1px solid #0073b1;
        padding: 8px 10px;
        font-size: 12px;
        margin: 10px;

        a {
          color: #fff;
          text-decoration: none;
        }
      }
    }
  }
}
</style>
