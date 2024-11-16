<script setup>
import { reactive } from 'vue';


const educationInfo = reactive([
    {
        id: 0,
        timestamp: '01/2009 - 01/2020',
        studyPost: 'Student',
        UniversityName: 'MBOU SOSH N4',
    },
    {
        id: 1,
        timestamp: '04/2023 - 10/2024',
        studyPost: 'Math & computer science',
        UniversityName: 'MAI NIU of Moscow',
    },
])
</script>

<template>
    <div class="education-container">
        <span class="label">EDUCATION</span>

        <div v-for="it in educationInfo" :key="it.id" class="education-info">
            <h6 v-text="it.timestamp"></h6>
            <h4 v-text="it.studyPost"></h4>
            <h5 v-text="it.UniversityName"></h5>
        </div>

    </div>
</template>

<style lang="scss" scoped>
.education-container {
    display: flex;
    flex-direction: column;

    .label {
        font-size: x-large;
        font-weight: bold;
        color: aliceblue;
    }

    .education-info {
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