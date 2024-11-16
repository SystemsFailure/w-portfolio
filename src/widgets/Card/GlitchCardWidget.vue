<script setup>
import GlitchText from '../GlitchText.vue';

const props = defineProps({
    label: String,
})
</script>

<template>
    <div class="glitch-container">

        <GlitchText :text="label"></GlitchText>

    </div>
</template>

<style lang="scss" scoped>
.glitch-container {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-weight: bold;

    border-radius: 20px;
    background: linear-gradient(to left, #131313, #212121);
    border: 1px solid #00ffd5;
}
</style>