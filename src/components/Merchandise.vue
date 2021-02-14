<template>
  <body>
    <main>
      <Caption captions="Get Our Merchandice"></Caption>

      <section>
        <div>
          <img src="../assets/back.png" alt="">
        </div>
        <section>
          <div class="merchandise-card">
            <div class="merchandise-inner">
              <img src="../assets/router.png" alt="" />
              <br />
              <h2 class="p-name">Product Name here</h2>
              <p class="p-dec">
                Wireless Router Lorem ipsum Lorem ipsum Lorem ipsum
              </p>
              <h4 class="p-price">$49.50</h4>
              <p class="p-ship-info">Shipping Information here</p>
              <button class="p-cart-btn">Add to Cart</button>
            </div>
          </div>
          <div class="merchandise-card">
            <div class="merchandise-inner">
              <img src="../assets/cable.png" alt="" />
              <br />
              <h2 class="p-name">Product Name here</h2>
              <p class="p-dec">
                Wireless Router Lorem ipsum Lorem ipsum Lorem ipsum
              </p>
              <h4 class="p-price">$49.50</h4>
              <p class="p-ship-info">Shipping Information here</p>
              <button class="p-cart-btn">Add to Cart</button>
            </div>
          </div>
          <div class="merchandise-card">
            <div class="merchandise-inner">
              <img src="../assets/fiber.png" alt="" />
              <br />
              <h2 class="p-name">Product Name here</h2>
              <p class="p-dec">
                Wireless Router Lorem ipsum Lorem ipsum Lorem ipsum
              </p>
              <h4 class="p-price">$49.50</h4>
              <p class="p-ship-info">Shipping Information here</p>
              <button class="p-cart-btn">Add to Cart</button>
            </div>
          </div>
          <div class="merchandise-card">
            <div class="merchandise-inner">
              <img class="p-img" src="../assets/router.png" alt="" />
              <br />
              <h2 class="p-name">Product Name here</h2>
              <p class="p-dec">
                Wireless Router Lorem ipsum Lorem ipsum Lorem ipsum
              </p>
              <h4 class="p-price">$49.50</h4>
              <p class="p-ship-info">Shipping Information here</p>
              <button class="p-cart-btn">Add to Cart</button>
            </div>
          </div>
        </section>

        <div>
          <img src="../assets/forward.png" alt="">

        </div>
      </section>

    </main>
  </body>
</template>

<script>
import Caption from "@/components/Caption.vue";
export default {
  components: {
    Caption,
  },
};
</script>

<style lang="scss" scoped>
body {
  background-color: #fbfbfb;
  main {
    padding-bottom: 5%;
    animation: fadeIn 5s;
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
          font-size: 14px;
          line-height: 20px;
          margin: auto;
        }

        a {
          text-decoration: none;
          font-size: 12px;
        }
      }

      .merchandise-card {
        padding: 10px;
        width: 40%;
        margin: 10px;
        text-align: center;
        margin: 0 10px;
        padding: 20px 0;
        border-radius: 5px;
        background-color: #fff;
        width: 30%;
        box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.06);
        cursor: pointer;

        small {
          font-size: 11px;
          color: #505050;
        }

        .merchandise-inner {
          width: 80%;

          p,
          span,
          h4, .p-name {
            text-align: left;
            width: 100%;
            margin-bottom: 5px;
          }
        }

        h4 {
          font-weight: 600;
          font-size: 18px;
          padding: 6px 0;
          color: #3b85fc;
        }

        .p-cart-btn {
          border: none;
          background: #3b85fc;
          color: white;
          padding: 5px;
          margin-right: 56%;
          margin-top: 5px;
        }
      }
    }
  }
}
</style>
