<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    text: String,
    border: Boolean,
});

</script>

<template>
    <div v-text="props.text" :style="props.border ? {border: '1px solid #f7f7f8'} : undefined"></div>
</template>

<style lang="scss" scoped>
@import '../../styles/vars.scss';

    div {
        padding: 15px;
        color: white;
        border-radius: 10px;
        font-size: $button-font-size-standart;
        font-weight: bold;
    }
    div:hover {
        cursor: pointer;
        opacity: .5;
        transition: .3s ease;
    }
</style>