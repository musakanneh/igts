<template>
  <body>
    <main>
      <Caption captions="Lorem ipsum dolor sit amet eam "></Caption>
      <p>
        Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no
        suscipit quaerendum. <br />
        At nam minimum ponderum. Est audiam animal molestiae te.
      </p>
      <br /><br />
      <section class="mail">
        <input type="text" name="" id="" />
        <button>Subscribe</button>
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
  text-align: center;
  background-color: #fbfbfb;
  main {
    padding: 5%;
    h1 {
      width: 50%;
      font-size: 20px;
      margin: auto;
      color: #3b85fc;
      padding: 20px 0;
    }
    p {
      color: #505050;
      font-size: 12px;
      width: 50%;
      margin: auto;
    }

    input {
      border: 1px solid #3b85fc;
      padding: 4px 10px;
    }

    button {
      background: #3b85fc;
      border: transparent;
      color: #fff;
      font-size: 12px;
      padding: 6px 10px;
      margin: 0 5px;
    }
  }
}
</style>
