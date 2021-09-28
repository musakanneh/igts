<template>
  <div>
    <h1 :style="style">
      {{ content }}
    </h1>
    <p :style="style">
      {{ text }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    content: {
      type: String,
      require: true,
    },
    text: {
      type: String,
      require: true,
    },
  },
};
</script>

<style lang="scss" scoped>
h1 {
  background-color: rgb(2, 32, 60);
  padding: 12% 10% 5% 10%;
  color: #fbfbfbe0;
}

p {
  color: #fbfbfbe0;
  line-height: 30px;
  padding: 20px 0;
  font-size: 16px;
  font-weight: 400;
}
</style>