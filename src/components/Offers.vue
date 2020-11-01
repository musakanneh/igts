<template>
  <body>
    <main>
      <section>
        <div>
          <img src="../assets/case.png" alt="" />
          <h2>
            Digital Literacy Program
          </h2>
          <p>
            A two-weeks paid-for-training course designed to expose participants
            to different tech awareness courses, programming, and basic
            artificial intelligence - AI.
          </p>
          <a href="">Discover</a>
        </div>
        <div>
          <img src="../assets/circle.png" alt="" />
          <h2>
            ICT Help Clinic
          </h2>
          <p>
            One-stop-shop center established to provide top-notch and executive
            ICT and tech/digital consultancies to individuals, INGOs/NGOs,
            businesses and more
          </p>
            <a href="">Discover</a>
        </div>
        <div>
          <img src="../assets/circle.png" alt="" />
          <h2>
            Online Merchandising
          </h2>
          <p>
            IGTS engages into online and e-commerce business networking and
            trade. We work with cooperatives, trade unions, and business groups
            to facillitate markt expousre.
          </p>
            <a href="">Discover</a>
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
      width: 25px;
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
        a{
            text-decoration: none;
            font-size: 12px;
        }
      }
    }
  }
}
</style>
