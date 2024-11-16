<script setup>
import NativeCardWidget from '@/widgets/Card/NativeCardWidget.vue';
import AosBannerWidget from '@/widgets/Card/AosBannerWidget.vue';
import AboutCardWidget from '@/widgets/Card/AboutCardWidget.vue';
import GlitchCardWidget from '@/widgets/Card/GlitchCardWidget.vue';
import SocialCardWidget from '@/widgets/Card/SocialCardWidget.vue';

import signatureImage from '../assets/signature.png';
import casesImage from '../assets/my-works.png';
import YT from '../assets/yt.png';

</script>

<template>
    <div class="home">
        <div class="grid grid-rows-2 grid-flow-col gap-4">
            <div class="row-span-3">
                <NativeCardWidget :config="{}" :type-slot="'v1'" :backgroundColor="'#181818'"></NativeCardWidget>
            </div>
            <div class="col-span-2">
                <AosBannerWidget></AosBannerWidget>
            </div>
            <div class="row-span-2 col-span-2"
                style="width: 100%; display: flex; align-items: center; justify-content: space-between;">
                <AboutCardWidget :label="'Credentials'" :image="signatureImage"></AboutCardWidget>
                <AboutCardWidget class="CASES" :label="'Cases'" :image="casesImage" style="margin-left: 20px;">
                </AboutCardWidget>
            </div>
        </div>
        <hr style="margin-top: 50px; margin-bottom: 50px;">
        <div class="flex flex-row mt-2 gap-4">
            <div class="basis-1/4">
                <AboutCardWidget class="YT" :label="'My Hobby'" :image="YT"></AboutCardWidget>
            </div>
            <div class="basis-1/2">
                <GlitchCardWidget :label="'Future is now'"></GlitchCardWidget>
            </div>
            <div class="basis-1/3">
                <SocialCardWidget></SocialCardWidget>
            </div>
        </div>

    </div>
</template>

<style lang="scss" scoped>
.home {
    width: 100%;
    height: 80vh;
    margin-top: 50px;
    overflow: hidden;
}

.YT:hover {
    cursor: pointer;
    transition: .3s ease;
    background: radial-gradient(circle, #ff0000d0, #000000);
}

.CASES:hover {
    cursor: pointer;
    transition: .3s ease;
    background: linear-gradient(to left, #05d008a0, #00bbffa5);
}
</style>