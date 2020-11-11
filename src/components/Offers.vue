<template>
  <body>
    <main>
      <h1>What We Offer</h1>
      <section>
        <div class="offers">
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
        <div class="offers">
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
        <div class="offers">
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
    position: relative;
    top: -6vh;
    background: #fff;
    border-radius: 10px 10px 0 0;
    padding: 3px 50px;
    width: 80%;
    margin: auto;
    background-repeat: no-repeat;
    background-size: cover;
    object-fit: cover;

    h1 {
      font-size: 30px;
      color: #3b85fc;
      padding-bottom: 10px;
      font-weight: 600;
      text-align: center;
      margin-top: 30px;
      transition: 200ms;
      white-space: nowrap;
    }

    img {
      width: 25px;
    }

    section {
      justify-content: space-between;
      width: 100%;
      padding-top: 40px;
      display: flex;
      margin: auto;

      h2 {
        font-size: 15px;
        padding: 10px;
      }

      .offers {
        text-align: center;
        margin: 0 10px;
        padding: 20px 0;
        border-radius: 5px;
        width: 30%;
        box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.06);
        cursor: pointer;

        p {
          font-size: 14px;
          color: #303030;
          width: 80%;
          line-height: 20px;
          padding-bottom: 10px;
          margin: auto;
        }

        a {
          text-decoration: none;
          font-size: 14px;
          padding: 5px 10px;
          cursor: pointer;
          background-color: #3b85fc;
          box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.06);
          border-radius: 3px;
          font-style: normal;
          font-weight: 500;
          font-size: 12px;
          line-height: 18px;
          color: #fff;

          &:hover {
            background-color: #3b85fc;
            transition: 0.5s ease;
          }
        }

        &:hover {
          box-shadow: 0px 6px 20px rgba(107, 117, 201, 0.342);
          transition: 1s ease;

          h2 {
            color: #3b85fc;
            transition: 0.5s ease;
          }
        }
      }
    }
  }
}
</style>
