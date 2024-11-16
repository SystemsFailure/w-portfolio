<script setup>
import CardCaseWidget from '@/widgets/Works/CardCaseWidget.vue';
import { reactive } from 'vue';

const verticalCases = reactive([
    {
        id: 0,
        label: '',
        image: '',
        projectName: '',
    },
    {
        id: 1,
        label: '',
        image: '',
        projectName: '',
    },
    {
        id: 2,
        label: '',
        image: '',
        projectName: '',
    }
])

const gridCases = reactive([
    {
        id: 0,
        label: '',
        image: '',
        projectName: '',
    },
    {
        id: 1,
        label: '',
        image: '',
        projectName: '',
    },
    {
        id: 2,
        label: '',
        image: '',
        projectName: '',
    }
])
</script>

<template>
    <div class="works-container">

        <div class="vertical-block">
            <CardCaseWidget v-for="it in verticalCases" :key="it.id" class="v-case" :config="{ width: '300px', height: '300px' }"></CardCaseWidget>
        </div>

        <div class="grid-block">
            <div v-for="it in gridCases" :key="it.id" style="margin-left: 30px;">
                <CardCaseWidget :config="{ width: '300px', height: '300px' }">

                </CardCaseWidget>
            </div>
        </div>

    </div>
</template>

<style lang="scss" scoped>
.works-container {
    width: 100%;
    height: 80vh;
    padding-top: 50px;
    overflow: auto;
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
}
</style>