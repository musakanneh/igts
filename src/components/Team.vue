<template>
  <body>
    <main>
      <h1>Our Dedicated Team</h1>
      <section>
        <div>
          <img src="../assets/kanneh.png" alt="" />
          <h2>
            Arthur Wahwehele
          </h2>
          <p>
            Co-Founder & CEO
          </p>
        </div>
        <div>
          <img src="../assets/kanneh.png" alt="" />
          <h2>
            Bako Shaiabu
          </h2>
          <p>
            Co-Founder & CIO
          </p>
        </div>
        <div>
          <img src="../assets/kanneh.png" alt="" />
          <h2>
            Musa Kanneh
          </h2>
          <p>
            Co-Founder & CTO
          </p>
        </div>
        <div>
          <img src="../assets/kanneh.png" alt="" />
          <h2>
            Boima Konneh
          </h2>
          <p>
            Co-Founder & CFO
          </p>
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
    position: relative;
    top: 10vh;
    background: #fff;
    width: 90%;
    border-radius: 10px 10px 0 0;
    margin: auto;
    background-repeat: no-repeat;
    background-size: cover;
    object-fit: cover;
    margin-bottom: 10%;

    h1 {
      color: #3b85fc;
      padding-top: 20px;
    }

    img {
      width: 40%;
      border-radius: 50%;
    }

    section {
      justify-content: space-between;
      width: 90%;
      padding-top: 40px;
      display: flex;
      margin: auto;

      h2 {
        font-size: 14px;
        padding: 10px;
      }

      div {
        text-align: center;

        p {
          font-size: 12px;
          width: 80%;
          line-height: 20px;
          margin: auto;
        }
        a {
          text-decoration: none;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
