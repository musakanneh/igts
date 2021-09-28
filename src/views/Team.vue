<template>
  <body>
    <main>
      <HeaderTemp
        content="Our Dedicated Team"
        text="We are a diverse team with different backgrounds but brought together by a
      shared passion - to make a difference in Liberia!"
      >
      </HeaderTemp>
      <section class="spacing">
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
import HeaderTemp from "@/components/Templates/HeaderTemp.vue";
export default {
  components: {
    HeaderTemp,
  },
};
</script>

<style lang="scss" scoped>
body {
  .spacing {
    padding-bottom: 6rem;
  }
  main {
    img {
      width: 80%;
      border-radius: 50%;
    }

    section {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      row-gap: 30px;

      h2 {
        font-size: 16px;
        padding: 10px;
        font-weight: bolder;
        color: #02203c;
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
