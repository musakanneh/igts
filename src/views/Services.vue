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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra
            tincidunt facilisis egestas pulvinar eget. Dolor massa bibendum
            tincidunt arcu, interdum lacus amet magna. Nunc nibh vestibulum sit
            feugiat. Fermentum nullam sit euismod viverra eu.
          </p>
          <br />
          <Button
            :isFullWidth="false"
            label="Explore More"
            width="150px"
          ></Button>
        </div>
        <div class="img-cover">
          <img src="../assets/service.jpg" alt="" />
        </div>
      </div>
      <div class="offers-sec">
        <Caption captions="We Offer The Best Service You Can Get"></Caption>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venenatis
          consectetur auctor tortor a. Iaculis id dolor et sapien sit. Tincidunt
          dui pharetra dictumst potenti. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Venenatis consectetur auctor tortor a. Iaculis id
          dolor et sapien sit. Tincidunt dui pharetra dictumst potenti.
        </p>
        <br />
        <br />
        <Button
          :isFullWidth="false"
          label="Explore More"
          width="150px"
        ></Button>
      </div>

      <div class="sec-one-cover">
        <div class="cap">
          <h1>
            Our Digital Literacy <br />
            Program
          </h1>
          <p>
            A two-years, six months fellowship program designed to train and
            empower young and consciously-driven programmers, and software
            engineers and developers and usher them into our ‘Innovation &
            Developers’ Campus.’ Participants will work either in-person and/or
            remotely at one of our IDCs working for our client-employer
            institution to help with ICT-related issues and problems being faced
            by them; they will also work with us as in-house programmers,
            software engineers and developers at our ‘ICT-Tech Help Clinic’.
          </p>
          <br />
          <Button
            :isFullWidth="false"
            label="Explore More"
            width="150px"
          ></Button>
        </div>
        <div class="img-cover">
          <img src="../assets/d-literacy.png" alt="" />
        </div>
      </div>

      <div class="sec-one-cover">
        <div class="cap">
          <h1>
            Our Digital Literacy <br />
            Program
          </h1>
          <p>
            A two-years, six months fellowship program designed to train and
            empower young and consciously-driven programmers, and software
            engineers and developers and usher them into our ‘Innovation &
            Developers’ Campus.’ Participants will work either in-person and/or
            remotely at one of our IDCs working for our client-employer
            institution to help with ICT-related issues and problems being faced
            by them; they will also work with us as in-house programmers,
            software engineers and developers at our ‘ICT-Tech Help Clinic’.
          </p>
          <br />
          <Button
            :isFullWidth="false"
            label="Explore More"
            width="150px"
          ></Button>
        </div>
        <div class="img-cover">
          <img class="cover" src="../assets/d-literacy.png" alt="" />
        </div>
      </div>

      <article></article>
      <aside></aside>
    </main>
  </body>
</template>

<script>
import Button from "@/components/Button.vue";
import Caption from "@/components/Caption.vue";
export default {
  components: {
    Button,
    Caption,
  },
};
</script>

<style lang="scss" scoped>
body {
  background-color: #fbfbfb;
  display: flex;
  flex-direction: column;
  flex: auto;

  .offers-sec {
    padding: 10% 0;
    text-align: center;
    background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.712)),
      url("../assets/bg.jpeg");
    background-repeat: no-repeat;
    background-attachment: fixed;
    margin: auto;
    position: center;
    background-size: cover;
    z-index: 1;
    text-align: center;

    p {
      width: 50%;
      font-size: 15px;
      line-height: 22px;
      color: #fff;
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

      .cover {
        border: 1px solid red;
      }

      p {
        line-height: 22px;
        font-size: 15px;
      }
    }

    .img-cover {
      width: 50%;
      img {
        width: 100%;
      }
    }
  }
}
</style>
