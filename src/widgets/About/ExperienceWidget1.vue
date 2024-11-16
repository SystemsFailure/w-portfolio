<script setup>
import { reactive } from 'vue';


const experienceInfo = reactive([
    {
        id: 0,
        timestamp: '04/2023 - 10/2024',
        jobPost: 'Fullstack developer',
        companyName: 'KBM',
    },
    {
        id: 1,
        timestamp: '01/2022 - 02/2023',
        jobPost: 'Fronted developer',
        companyName: 'AXAS',
    },
])
</script>

<template>
    <div class="experience-container">
        <span class="label">EXPERIENCE</span>

        <div v-for="it in experienceInfo" :key="it.id" class="experience-info">
            <h6 v-text="it.timestamp"></h6>
            <h4 v-text="it.jobPost"></h4>
            <h5 v-text="it.companyName"></h5>
        </div>

    </div>
</template>

<style lang="scss" scoped>

.experience-container {
    display: flex;
    flex-direction: column;

    .label {
        font-size: x-large;
        font-weight: bold;
        color: aliceblue;
    }

    .experience-info {
        width: 100%;
        flex: 1;
        margin-top: 40px;

        h6 {
            font-size: 20px;
            opacity: .7;
            font-weight: 700;
        }

        h5 {
            font-size: 20px;
            font-weight: 700;
            color: rgb(67, 110, 130);
        }
        
        h4 {
            font-size: 20px;
            font-weight: bold;
        }
    }
}

</style>