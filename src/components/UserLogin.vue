<template>
  <main>
    <section>
      <img src="../assets/circle.png" alt="" />
      <div><p>Musa</p></div>
      <div class="drop-down-indicator"></div>
    </section>
  </main>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
section {
  border: 1px solid red;

  .drop-down-indicator {
    border-left: 7px solid transparent;
    border-top: 7px solid #fff;
    border-right: 7px solid transparent;
    border-bottom: 7px solid transparent;
    margin: 10px 0 0 0;
  }
}
</style>