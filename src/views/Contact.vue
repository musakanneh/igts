<template>
  <body>
    <main>
      <HeaderTemp content="Leave a Message Below"> </HeaderTemp>

      <section class="main-sec container">
        <Caption captions="Leave a message below"></Caption>
        <div class="main-bg">
          <div class="image">
            <img src="../assets/d-literacy.png" alt="" />
          </div>

          <div class="form-sec">
            <div class="form-data">
              <p class="label">Name</p>
              <input type="text" />
            </div>
            <div class="form-data">
              <p class="label">E-mail</p>
              <input type="text" />
            </div>
            <div class="form-data">
              <p class="label">Message</p>
              <input type="text" />
            </div>
            <div class="form-data">
              <Button :isFullWidth="false" label="Submit" width="150px">
              </Button>
            </div>
          </div>
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
.main-sec {
  margin-bottom: 50px;
  margin-bottom: 50px;
}
.main-bg {
  display: flex;
  background: white;
  padding: 50px;
  width: 60%;
  box-shadow: 5px 5px 20px #3b85fc;
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
