<script setup>
import CardCaseWidget from '@/widgets/Works/CardCaseWidget.vue';
import RX from '@/assets/rx1.jpg';

import { reactive } from 'vue';
const verticalCases = reactive([
    {
        id: 0,
        label: '',
        image: RX,
        projectName: '',
    },
    {
        id: 1,
        label: '',
        image: RX,
        projectName: '',
    },
    {
        id: 2,
        label: '',
        image: RX,
        projectName: '',
    }
])

const gridCases = reactive([
    {
        id: 0,
        label: '',
        image: RX,
        projectName: '',
    },
    {
        id: 1,
        label: '',
        image: RX,
        projectName: '',
    },
    {
        id: 2,
        label: '',
        image: RX,
        projectName: '',
    }
])
</script>

<template>
    <div class="works-container">

        <div class="vertical-block">
            <CardCaseWidget v-for="it in verticalCases" :key="it.id" class="v-case"
                :config="{ width: '400px', height: '400px' }">
                <template #image>
                    <img :src="it.image" style="border-radius: 20px;" width="250px" height="100px">
                </template>

                <template #label>

                </template>

                <template #project>

                </template>
            </CardCaseWidget>
        </div>

        <div style="display: flex; flex-direction: column; width: 100%;">
            <div class="col-span-2 comm-title">
                <img src="../assets/star-2.png" alt="">
                <span> ALL-CASES </span>
                <img src="../assets/star-2.png" alt="">
            </div>

            <div class="grid-block">
                <div v-for="it in gridCases" :key="it.id" style="margin-left: 30px;">
                    <CardCaseWidget :config="{ width: '300px', height: '300px', 'margin-top': '40px' }">
                        <template #image>
                            <img :src="it.image" style="border-radius: 20px;">
                        </template>

                        <template #label>

                        </template>

                        <template #project>

                        </template>
                    </CardCaseWidget>
                </div>
            </div>
        </div>


    </div>
</template>

<style lang="scss" scoped>
.works-container {
    width: 100%;
    height: 80vh;
    padding-top: 50px;
    display: flex;

    .vertical-block {
        display: flex;
        flex-direction: column;
        height: 100%;

        .v-case {
            margin-top: 30px;
        }

        .v-case:first-child {
            margin-top: 0;
        }
    }

    .grid-block {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 10px;
        margin-left: 50px;
        // flex: 1 40%;
    }

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
}
</style>