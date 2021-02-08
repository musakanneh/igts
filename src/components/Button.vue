<template>
  <div>
    <button
      :style="style"
      :class="{ fullWidth: isFullWidth, halfWidth: !isFullWidth }"
      class="main-button"
    >
      {{ label }}
    </button>
  </div>
</template>

<script>
export default {
  name: "main-button",
  data() {
    return {
      style: "width:" + this.width,
    };
  },
  props: {
    label: {
      type: String,
      required: true,
    },
    isFullWidth: {
      type: Boolean,
      required: true,
    },
    width: {
      type: String,
      required: false,
    },
  },
};
</script>

<style lang="scss" scoped>
@media only screen and (max-width: 900px) {
  .main-button {
    height: 80px !important;
    width: 30% !important;
    font-size: 30px !important;
  }
}

.fullWidth {
  width: 100%;
}

.halfWidth {
  width: 60%;
}

.main-button {
  border: none;
  background: #3b85fc;
  // border-radius: 5px;
  font-size: 18px;
  height: 45px;
  color: white;
  box-shadow: inset 0 -0.6em 1em -0.35em rgba(0, 0, 0, 0.17),
    inset 0 0.6em 2em -0.3em rgba(255, 255, 255, 0.15),
    inset 0 0 0em 0.05em rgba(255, 255, 255, 0.12);
  text-align: center;
  cursor: pointer;
}

.main-button:hover {
  background: rgba(47, 128, 237, 0.4);
  transition: 0.5s ease;
  color: #ffffff;
}

button:focus {
  outline: none;
}
</style>
