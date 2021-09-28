<template>
  <body>
    <main>
      <HeaderTemp content="Your awesome IT Tech needs consultant"> </HeaderTemp>

      <div class="sec-one-cover">
        <div class="cap">
          <p>
            The Internet Generation Technology Solutions (IGTS) Africa Limited
            is building 100 software engineers by 2023 through the techaware
            fellowship program that will use ICT for sustainable development.
          </p>
          <p>
            We are an Information Communication Technology (ICT) firm/company
            that promotes digital inclusivity and awareness in Liberia through
            digital literacy programs, software designs and development, online
            marketing and branding, educational tech shows and digital product
            sales and merchandise.
          </p>
          <p>
            IGTS intervention will focus on key areas beginning with the Digital
            Literacy Program (DLP) through the Tech Aware Crash Courses and the
            Tech Aware Fellowship Program; Tech Awareness through educational
            Tech Shows; Tech consultancy to individuals, institutions & others
            through our ICT-Tech Help Clinic; and ICT solutions and innovations
            through Apps development, Online Merchandising, and
            e-Commerce/trade;
          </p>
          <Button
            :isFullWidth="false"
            label="Explore More"
            width="150px"
          ></Button>
        </div>
        <div class="img-cover">
          <img src="../assets/product.png" alt="" />
        </div>
      </div>
    </main>
  </body>
</template>

<script>
import HeaderTemp from "@/components/Templates/HeaderTemp.vue";
import Button from "@/components/Button.vue";

export default {
  components: {
    HeaderTemp,
    Button,
  },
};
</script>

<style lang="scss" scoped>
body {
  background-color: #fbfbfb;
  display: flex;
  flex-direction: column;
  flex: auto;
  width: 100%;

  p {
    font-size: 15px;
    line-height: 22px;
    margin: 1rem 0;
    color: #303030;
  }
}

.sec-one-cover {
  display: flex;
  flex-direction: row;
  flex: auto;
  margin: auto;
  padding-bottom: 6rem;
  padding-top: 2rem;
  width: 85%;
  justify-content: space-evenly;

  .cap {
    width: 40%;

    p {
      line-height: 22px;
      font-size: 15px;
    }
  }

  .img-cover {
    width: 50%;
    
    img {
      max-width: 100%;
      max-height: 800px;
    }
  }
}
</style>
