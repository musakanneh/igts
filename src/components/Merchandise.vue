<template>
  <body>
    <main>
      <h1>Get Our Merchandice</h1>
      <br />
      <section>
        <div class="merchandise-card">
          <img src="../assets/router.png" alt="" />

          <p>
            Wireless Router Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
            Lorem ipsum
          </p>
          <h4>$49.50</h4>
          <small>Eligible for Shipping To Mars or somewhere else</small>
        </div>
        <div class="merchandise-card">
          <img src="../assets/cable.png" alt="" />

          <p>
            Wireless Router Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
            Lorem ipsum
          </p>
          <h4>$49.50</h4>
          <small>Eligible for Shipping To Mars or somewhere else</small>
        </div>
        <div class="merchandise-card">
          <img src="../assets/fiber.png" alt="" />

          <p>
            Wireless Router Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
            Lorem ipsum
          </p>
          <h4>$49.50</h4>
          <small>Eligible for Shipping To Mars or somewhere else</small>
        </div>
        <div class="merchandise-card">
          <br />
          <img src="../assets/laptop.png" alt="" />
          <br />
          <br />
          <p>
            Wireless Router Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
            Lorem ipsum
          </p>
          <h4>$49.50</h4>
          <small>Eligible for Shipping To Mars or somewhere else</small>
        </div>
      </section>
    </main>
  </body>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
body {
  main {
    img {
      width: 50%;
    }

    h1 {
      text-align: center;
      color: #3b85fc;
    }

    section {
      justify-content: space-between;
      width: 90%;
      display: flex;
      margin: auto;

      h2 {
        font-size: 14px;
      }

      div {
        p {
          font-size: 12px;
          line-height: 20px;
          margin: auto;
        }

        a {
          text-decoration: none;
          font-size: 12px;
        }
      }

      .merchandise-card {
        width: 40%;
        margin: 10px;

        small {
          font-size: 12px;
          color: #505050;
        }

        h4 {
          font-weight: 600;
          font-size: 18px;
          padding: 6px 0;
          color: #3b85fc;
        }
      }
    }
  }
}
</style>
