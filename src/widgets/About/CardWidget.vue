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

        <slot name="content">

        </slot>

    </div>
</template>

<style lang="scss" scoped>
.main {
    border-radius: 20px;
    background: linear-gradient(to left, #131313, #212121);
    border: 1px solid #1e1e1e;
    color: rgb(180, 180, 180);
    padding: 20px;
}
</style>