<template>
  <div>
    <h1 :style="style">
      {{ captions }}
    </h1>
  </div>
</template>

<script>
export default {
  props: {
    captions: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
h1 {
   font-weight: bolder;
    font-size: 2.5rem;
}
</style>
