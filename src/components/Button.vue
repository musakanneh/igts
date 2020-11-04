<template>
<div>
    <button :style="style" :class="{ fullWidth: isFullWidth, halfWidth: !isFullWidth }" class="main-button">
        {{ label }}
    </button>
</div>
</template>

<script>
export default {
    name: "main-button",
    data: function () {
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
    cursor: pointer;
    height: 45px;
    background: #3b85fc;
    box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.06);
    border-radius: 3px;
    border: none;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 18px;
    color: #fff;
}

.main-button:hover {
    background: #3b85fc;
    transition: 1s ease;
    color: #ffffff;
}

button:focus {
    outline: none;
}
</style>
