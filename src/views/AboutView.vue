<script setup>
import AvatarWidget from '@/widgets/About/AvatarWidget.vue';
import DescriptionWidget from '@/widgets/About/DescriptionWidget.vue';
import ExperienceWidget from '@/widgets/About/ExperienceWidget1.vue';
import EducationWidget from '@/widgets/About/EducationWidget.vue';
import CardWidget from '@/widgets/About/CardWidget.vue';
</script>

<template>
    <div class="about">
        <div class="top-container">
            <div class="grid gap-4">
                <div class="row-span-3">
                    <CardWidget :config="{ width: '100%', display: 'flex' }">
                        <template #content>
                            <AvatarWidget></AvatarWidget>
                            
                            <div class="exp-container">
                                <ExperienceWidget></ExperienceWidget>
                                <EducationWidget style="margin-left: 80px;"></EducationWidget>
                            </div>
                        </template>
                    </CardWidget>
                </div>
                <div class="col-span-2 comm-title">
                    <img src="../assets/star-2.png" alt="">
                    <span> SELF-SUMMARY </span>
                    <img src="../assets/star-2.png" alt="">
                </div>
                <div class="row-span-2">
                    <DescriptionWidget></DescriptionWidget>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.about {
    width: 100%;
    height: 80vh;
    display: flex;
    flex-direction: column;
    margin-top: 50px;

    .comm-title {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;

        span {
            font-size: 1.8vw;
            font-weight: bold;
        }
    }

    .exp-container {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
}
</style>