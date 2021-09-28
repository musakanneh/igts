<template>
  <body>
    <main>
      <Caption captions="Our Dedicated Team"></Caption>
      <p>
        We are a diverse team with different backgrounds but brought together by
        <br />
        a shared passion - to make a difference in Liberia!
      </p>
      <section>
        <div>
          <img src="../assets/ED.png" alt="" />
          <h2>Arthur Wahwehele</h2>
          <p>Co-Founder & CEO</p>
        </div>
        <div>
          <img src="../assets/Bako.png" alt="" />
          <h2>Bako Shaiabu</h2>
          <p>Co-Founder & CIO</p>
        </div>
        <div>
          <img src="../assets/Musa.png" alt="" />
          <h2>Musa Kanneh</h2>
          <p>Co-Founder & CTO</p>
        </div>
      </section>
      <section>
        <div>
          <img src="../assets/Boima.png" alt="" />
          <h2>Boima Konneh</h2>
          <p>Co-Founder & CFO</p>
        </div>
        <div>
          <img src="../assets/ian.png" alt="" />
          <h2>Ian Odhiambo</h2>
          <p>Systems Engineer</p>
        </div>
        <div>
          <img src="https://via.placeholder.com/300" alt="" />
          <h2>Ebenezer Davies</h2>
          <p>Programme Associate</p>
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
  main {
    margin: 10% 0;

    h1 {
      color: #3b85fc;
      padding-top: 20px;
    }

    img {
      width: 60%;
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
