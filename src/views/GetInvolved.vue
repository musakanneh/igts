<template>
  <body>
    <HeaderTemp content="Get Involved with our Programs"> </HeaderTemp>
    <main class="add-spacing__down">
      <div class="get-involved-cards">
        <!-- <div class="text-card">
          <p>
            IGTS intervention will focus on key areas beginning with the Digital
            Literacy Program (DLP) through the Tech Aware Crash Courses and the
            Tech Aware Fellowship Program; Tech Awareness through educational
            Tech Shows; Tech consultancy to individuals, institutions & others
            through our ICT-Tech Help Clinic; and ICT solutions and innovations
            through Apps development, Online Merchandising, and
            e-Commerce/trade;
          </p>
        </div> -->
        <div class="emp-card">
          <div class="text-overlay">
            <p class="main-text">Become an Employer</p>
            <p class="desc-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna
            </p>
          </div>
          <Button
            class="get-involved-btn"
            :isFullWidth="false"
            label="Get involved"
            width="150px"
          ></Button>
        </div>

        <div class="dev-card">
          <div class="text-overlay">
            <p class="main-text">Become a Developer</p>

            <p class="desc-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna
            </p>
          </div>
          <Button
            class="get-involved-btn"
            :isFullWidth="false"
            label="Get Involved"
            width="150px"
          ></Button>
        </div>
      </div>
    </main>
  </body>
</template>

<script>
import Button from "@/components/Button.vue";
import HeaderTemp from "@/components/Templates/HeaderTemp.vue";

export default {
  components: {
    HeaderTemp,
    Button,
  },
};
</script>

<style scoped>
main {
  width: 90%;
}

p {
  font-size: 15px;
  line-height: 22px;
  color: #303030;
}

.label {
  margin-bottom: 10px;
}

.get-involved-cards {
  display: flex;
}
.text-card {
  flex: 1;
}
.emp-card {
  background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.9),
      rgba(47, 128, 237, 0.9)
    ),
    url(../assets/emp.jpg);
  height: 500px;
  width: 500px;
  background-size: cover;
  position: relative;
  margin-right: 5rem;
}

.dev-card {
  background-image: linear-gradient(
      0deg,
      rgba(255, 0, 150, 0.9),
      rgba(47, 128, 237, 0.9)
    ),
    url(../assets/dev.jpg);
  height: 500px;
  width: 500px;
  background-size: cover;
  position: relative;
}

.text-overlay {
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.main-text {
  font-weight: bolder;
  color: white;
  font-size: 2rem;
}

.desc-text {
  color: white;
}

.get-involved-btn {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
