<template>
  <body>
    <main>
      <div class="sec-one-cover">
        <div class="cap">
          <h1>
            Your awesome IT Tech <br />
            needs consultant
          </h1>
          <p>
            The Internet Generation Technology Solutions (IGTS) Africa Limited
            is building 100 software engineers by 2023 through the techaware
            fellowship program that will use ICT for sustainable development.
          </p>
          <br />
          <p>
            We are an Information Communication Technology (ICT) firm/company
            that promotes digital inclusivity and awareness in Liberia through
            digital literacy programs, software designs and development, online
            marketing and branding, educational tech shows and digital product
            sales and merchandise.
          </p>
          <br />
          <p>
            IGTS intervention will focus on key areas beginning with the Digital
            Literacy Program (DLP) through the Tech Aware Crash Courses and the
            Tech Aware Fellowship Program; Tech Awareness through educational
            Tech Shows; Tech consultancy to individuals, institutions & others
            through our ICT-Tech Help Clinic; and ICT solutions and innovations
            through Apps development, Online Merchandising, and
            e-Commerce/trade;
          </p>
          <br />
          <Button
            :isFullWidth="false"
            label="Explore More"
            width="150px"
          ></Button>
        </div>
        <div class="img-cover">
          <img src="../assets/comp.png" alt="" />
        </div>
      </div>

      <hr>

      <GetInvolvedCard />
    </main>
  </body>
</template>

<script>

import Button from "@/components/Button.vue";
import GetInvolvedCard from "@/components/GetInvolvedCard.vue";

export default {
  name: "Services",
  components: {
    Button,
    GetInvolvedCard,
  },
};
</script>

<style lang="scss" scoped>

hr {
  margin-top: 20px;
  margin-bottom: 20px;
  width: 90%;
  border-top: 1px dashed #3b85fc;
}

body {
  background-color: #fbfbfb;
  display: flex;
  flex-direction: column;
  flex: auto;
  width: 100%;
  animation: fadeIn 5s;

  p {
    font-size: 15px;
    line-height: 22px;
    color: #303030;
  }
}

.sec-one-cover {
  display: flex;
  flex-direction: row;
  flex: auto;
  margin: auto;
  padding: 4% 0;
  width: 95%;
  justify-content: space-between;

  h1 {
    padding: 25px 0;
    font-size: 35px;
    color: #3b85fc;
    font-weight: 600;
    transition: 200ms;
    white-space: nowrap;
  }

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
