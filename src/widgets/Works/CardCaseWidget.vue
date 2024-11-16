<script setup>
const props = defineProps({
    config: {
        type: Object,
        default: {
            width: '100%',
            height: '100%',
        },
    }
})
</script>

<template>
    <div class="main" :style="{ ...config }">

        <slot name="image"></slot>
        <slot name="label"></slot>
        <slot name="project"></slot>

        <div class="about-btn">
            <img src="../../assets/icon.svg" alt="">
        </div>
    </div>
</template>

<style lang="scss" scoped>
.main {
    position: relative;
    border-radius: 20px;
    background: linear-gradient(to left, #131313, #212121);
    border: 1px solid #1e1e1e;
    color: rgb(180, 180, 180);
    padding: 20px;

    .about-btn {
        display: block;
        position: absolute;
        right: 10px;
        bottom: 10px;
        opacity: 0.2;
        transition: 0.3s;
    }

    .about-btn:hover {
        opacity: 1;
        cursor: pointer;
    }
}
</style>