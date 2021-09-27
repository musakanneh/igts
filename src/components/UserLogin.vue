<template>
  <main>
    <section>
      <img src="../assets/Musa.png" alt="" />
      <div class=""><p>Musa</p></div>
      <div class="drop-down-indicator profile-pic"></div>
    </section>
  </main>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
main {
  .profile-pic {
    margin-top: 0.85rem;
  }

  p {
    color: #fff;
  }
  section {
    display: flex;

    img {
      width: 25%;
      border-radius: 50%;
    }
  }
}
</style>