<template>
  <body>
    <main>
      <aside>
        <img src="../assets/client.png" alt="" />
      </aside>
      <article>
        <h2>
          Clients We’ve Worked With
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim.
        </p>

        <section>
          <div>
            <img src="../assets/case.png" alt="" />
            <h4>
              Project
            </h4>
            <small>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor.
            </small>
          </div>
          <div>
            <img src="../assets/case.png" alt="" />
            <h4>
              Project
            </h4>
            <small>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor.
            </small>
          </div>
          <div>
            <img src="../assets/case.png" alt="" />
            <h4>
              Project
            </h4>
            <small>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor.
            </small>
          </div>
          <div>
            <img src="../assets/case.png" alt="" />
            <h4>
              Project
            </h4>
            <small>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor.
            </small>
          </div>
        </section>
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
      </div>
    </section>
  </body>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
body {
  padding: 30px 0;

  section {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 5% 0;

    img {
      width: 25px;
    }

    div {
      margin: 10px 0;
      width: 90%;

      h4 {
        padding: 2px 0;
      }

      small {
        font-size: 12px;
      }
    }
  }

  main {
    display: flex;
    flex-direction: row;
    flex: auto;

    article {
      width: 80%;
      padding: 4% 7%;
      background-color: #e0ecfd;

      h2 {
        font-size: 20px;
        padding: 10px 0;
        color: #3b85fc;
      }

      p {
        font-size: 12px;
        line-height: 18px;
      }
    }

    aside {
      img {
        width: 100%;
      }
    }
  }
  .learn-more-sec {
    width: 90%;
    margin: auto;

    h2 {
      padding: 10px 0;
      color: #3b85fc;
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
