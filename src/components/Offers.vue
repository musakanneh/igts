<template>
  <body>
    <main class="add-spacing-up-and-down">
      <Caption captions="What We Offer"></Caption>
      <section>
        <div class="offers">
          <img src="../assets/case.png" alt="" />
          <h2>Digital Literacy Program</h2>
          <p>
            A two-weeks paid-for-training course designed to expose participants
            to different tech awareness courses, programming, and basic
            artificial intelligence - AI.
          </p>
          <a href="">Discover</a>
        </div>
        <div class="offers">
          <img src="../assets/circle.png" alt="" />
          <h2>ICT Help Clinic</h2>
          <p>
            One-stop-shop center established to provide top-notch and executive
            ICT and tech/digital consultancies to individuals, INGOs/NGOs,
            businesses and more
          </p>
          <a href="">Discover</a>
        </div>
        <div class="offers">
          <img src="../assets/circle.png" alt="" />
          <h2>Online Merchandising</h2>
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
import Caption from "@/components/Caption.vue";
export default {
  components: { Caption },
};
</script>

<style lang="scss" scoped>
body {
  background: #fbfbfb;

  main {
    width: 90%;
    margin: auto;
    position: relative;
    background: #fbfbfb;
    top: -6vh;

    img {
      width: 35px;
    }

    section {
      justify-content: space-between;
      width: 100%;
      padding-top: 20px;
      display: flex;
      margin: auto;

      h2 {
        font-size: 16px;
        padding: 10px;
        color: #02203c;
      }

      .offers {
        background-color: rgb(255, 255, 255);
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 50px -10px;
        box-sizing: border-box;
        cursor: auto;
        display: flex;
        flex-direction: column;
        font-size: 16px;
        height: 245px;
        line-height: 22.85714340209961px;
        margin-bottom: 0px;
        margin-left: 0px;
        margin-right: 0px;
        margin-top: 0px;
        padding-bottom: 40px;
        padding-left: 40px;
        padding-right: 40px;
        padding-top: 40px;
        position: relative;
        transition-delay: 0s;
        transition-duration: 0.2s;
        transition-property: box-shadow;
        text-align: center;
        margin: 0 10px;
        padding: 20px 0;
        border-radius: 3px;
        width: 30%;
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
          padding: 6px 10px;
          cursor: pointer;
          background-color: #fbfbfb;
          border: 1px solid #70707063;
          border-radius: 3px;
          font-style: normal;
          font-weight: 500;
          font-size: 12px;
          line-height: 18px;
          color: #606060;
        }

        &:hover {
          box-shadow: 0px 6px 20px rgba(107, 117, 201, 0.342);
          transition: 1s ease;

          a {
            background: #890023;
            color: #fff;
            transition: 0.5s ease;
          }

          h2 {
            color: #890023;
            transition: 0.4s ease;
          }
        }
      }
    }
  }
}
</style>
