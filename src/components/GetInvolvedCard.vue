<template>
  <body>
    <main>

      <div class="get-involved-cards">

        <div class="text-card"> 
          <h1>Get Involved with our Programs</h1>
            <p>
              IGTS intervention will focus on key areas beginning with the Digital
              Literacy Program (DLP) through the Tech Aware Crash Courses and the
              Tech Aware Fellowship Program; Tech Awareness through educational
              Tech Shows; Tech consultancy to individuals, institutions & others
              through our ICT-Tech Help Clinic; and ICT solutions and innovations
              through Apps development, Online Merchandising, and
              e-Commerce/trade;
            </p>
        </div>
        <div class="emp-card">
          <div class="text-overlay">
            <p class="main-text">
              Become an Employer
            </p>

            <p class="desc-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
              purus sit amet luctus venenatis, lectus magna            
            </p>
          </div>
          <Button class="get-involved-btn" :isFullWidth="false" label="Get involved" width="150px"></Button>
        </div>


        <div class="dev-card">
          <div class="text-overlay">
            <p class="main-text">
              Become a Developer
            </p>

            <p class="desc-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
              purus sit amet luctus venenatis, lectus magna            
            </p>
          </div>
          <Button class="get-involved-btn" :isFullWidth="false" label="Get Involved" width="150px"></Button>
        </div>
      </div>

      <hr>

      <section class="main-sec">
        <Caption captions="Leave a message below"></Caption>
        <div class="main-bg">
          <div class="image">
            <img src="../assets/d-literacy.png" alt="">
          </div>

          <div class="form-sec">
            <div class="form-data">
              <p class="label">Name</p>
              <input type="text">
            </div>
            <div class="form-data">
              <p class="label">E-mail</p>
              <input type="text">
            </div>
            <div class="form-data">
              <p class="label">Message</p>
              <input type="text">
            </div>
            <div class="form-data">
              <Button
                :isFullWidth="false"
                label="Submit"
                width="150px">
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  </body>
</template>

<script>
import Caption from "@/components/Caption.vue";
import Button from "@/components/Button.vue";

export default {
  components: {
    Caption,
    Button
  },
};
</script>

<style scoped>
hr {
  margin-top: 20px;
  margin-bottom: 20px;
  width: 100%;
  border-top: 1px dashed #3b85fc;
}

main {
  width: 90%;
}

h1 {
  padding: 25px 0;
  font-size: 35px;
  color: #3b85fc;
  font-weight: 600;
  transition: 200ms;
  white-space: nowrap;
}

.get-involved-cards {
  display: flex;
  margin-top: 30px;
  margin-bottom: 50px;
}
.text-card {
  flex: 1;
}
.emp-card{
  background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.9), rgba(47, 128, 237, 0.9)), url(../assets/emp.jpg);
  height: 500px;
  width: 500px;
  background-size: cover;
  position: relative;
  margin-right: 5rem;

}

.dev-card{
  background-image: linear-gradient(0deg, rgba(255, 0, 150, 0.9), rgba(47, 128, 237, 0.9)), url(../assets/dev.jpg);
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
  white-space: nowrap;
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
.main-sec {
  margin-bottom: 50px;
  margin-bottom: 50px;
  
}
.main-bg {
  display: flex;
  background: white;
  padding: 50px;
  width: 60%;
  box-shadow:5px 5px 20px #3b85fc;
}
.form-sec {
  flex: 2;
}

.form-data {
  margin-bottom: 50px;
}

input {
  height: 30px;
  width: 80%;
  outline: none;
  border: solid 1px #3b85fc;
}
</style>
