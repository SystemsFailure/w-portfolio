<script setup>
import NativeCardWidget from '@/widgets/Card/NativeCardWidget.vue';
import AosBannerWidget from '@/widgets/Card/AosBannerWidget.vue';

</script>

<template>
    <div class="home">
        <div class="grid grid-rows-3 grid-flow-col gap-16">
            <div class="row-span-3">
                <NativeCardWidget :config="{ width: '85%', height: 'fit-content' }" :type-slot="'v1'"
                    :backgroundColor="'#181818'"></NativeCardWidget>
            </div>
            <div class="col-span-2">
                <AosBannerWidget></AosBannerWidget>
            </div>
            <div class="row-span-2 col-span-2">03</div>
        </div>

        <div class="flex flex-row mt-2">
            <div class="basis-1/4">01</div>
            <div class="basis-1/2">02</div>
            <div class="basis-1/3">03</div>
        </div>

    </div>
</template>

<style lang="scss" scoped>
.home {
    width: 100%;
    height: 80vh;
    margin-top: 50px;
}
</style>