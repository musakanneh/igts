<template>
  <body>
    <main>
      <aside>
        <img src="../assets/client.jpg" alt="" />
      </aside>
      <article>
        <Caption captions="Clients We’ve Worked With"></Caption>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim.
        </p>

        <section class="projects-cover">
          <div>
            <img src="../assets/case.png" alt="" />
            <h4>
              Project
            </h4>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor.
            </p>
          </div>
          <div>
            <img src="../assets/case.png" alt="" />
            <h4>
              Project
            </h4>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor.
            </p>
            <br />
          </div>

          <div>
            <img src="../assets/case.png" alt="" />
            <h4>
              Project
            </h4>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor.
            </p>
          </div>

          <div>
            <img src="../assets/case.png" alt="" />
            <h4>
              Project
            </h4>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor.
            </p>
          </div>
        </section>

        <Button
          :isFullWidth="false"
          label="Explore more"
          width="150px"
        ></Button>
      </article>
    </main>
    <section class="learn-more-sec">
      <div><img src="../assets/techguy.png" alt="" /></div>
      <div>
        <h2>
          Learn More About Us
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim.
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim.
        </p>
        <Button
          :isFullWidth="false"
          label="Explore more"
          width="150px"
        ></Button>
      </div>
    </section>
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
  text-align: center;

  .projects-cover {
    width: 70%;
  }

  section {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 5% 0;

    img {
      width: 25px;
    }

    div {
      margin: 10px 0;
      width: 100%;
      margin: auto;

      h4 {
        padding: 2px 0;
      }
    }
  }

  main {
    display: flex;
    flex-direction: row;
    background-color: #e0ecfd;
    height: auto;
    width: 100%;
    flex: auto;

    article {
      width: 70%;

      h2 {
        font-size: 30px;
        color: #3b85fc;
        padding-bottom: 10px;
        font-weight: 600;
        transition: 200ms;
        white-space: nowrap;
      }

      p {
        font-size: 15px;
        width: 70%;
        margin: auto;
        line-height: 20px;
      }
    }

    aside {
      width: 30%;
      img {
        width: 100%;
        height: 80%;
      }
    }
  }

  .learn-more-sec {
    width: 90%;
    margin: auto;

    h2 {
      padding: 8px 0;
      color: #3b85fc;
      font-size: 35px;
      font-weight: 600;
      transition: 200ms;
      white-space: nowrap;
    }

    p {
      font-size: 14px;
      line-height: 20px;
      width: 85%;
    }

    img {
      width: 100%;
    }
  }
}
</style>
