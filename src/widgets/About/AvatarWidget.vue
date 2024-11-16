<script setup>
import CardWidget from './CardWidget.vue';
import Person from '@/assets/person-1.png'
</script>

<template>
    <div class="avatar-widget">
        <CardWidget :config="{ width: '300px', height: '300px' }">

            <template #content>
                <img class="avatar" src="../../assets/person-1.png" width="300px" height="300px">
            </template>

        </CardWidget>
    </div>
</template>

<style lang="scss" scoped>
.avatar-widget {}

.avatar {
    border-radius: 20px;
}
</style>