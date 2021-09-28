<template>
  <body>
    <!-- <h3>Enter your email to subscribe to our newsletter</h3> -->
    <main>
      <!-- <input type="text" name="" id="" /> -->
      <!-- <Button :isFullWidth="false" label="Subscribe" width="150px"></Button> -->
    </main>
  </body>
</template>

<script>
// import Button from "@/components/Button.vue";
export default {
  components: {
    // Button,
  },
};
</script>

<style lang="scss" scoped>
body {
  text-align: center;
  h3 {
    color: #3b85fc;
    font-size: 18px;
    padding-bottom: 10px;
    transition: 200ms;
    text-decoration: none;
    white-space: nowrap;
    font-weight: 600;
  }
  main {
    display: flex;
    justify-content: space-between;

    input {
      border: 1px solid #3b85fc;
      width: 60%;
      padding: 3% 10px;
      border-radius: 5px;
    }
  }
}
</style>
