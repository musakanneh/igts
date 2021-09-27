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
  // padding: 35px 0;
  // margin: auto;
  // font-size: 35px;
  // color: #3b85fc;
  // color: #890023;
  
  // text-align: center;
  // font-weight: 600;
  // transition: 200ms;
  // white-space: nowrap;

   font-weight: bolder;
    font-size: 2.5rem;
    // color: white;
}
</style>
