<script setup>
import { reactive } from 'vue';
import TG from '@/assets/icons/tl.png';
import TW from '@/assets/icons/tw.png';
import GH from '@/assets/icons/gh.png';

const socialIcons = reactive([
    {
        id: 0,
        link: 'temegram',
        icon: TG,
    },
    {
        id: 1,
        link: 'Twitter',
        icon: TW,
    },
    {
        id: 2,
        link: 'Github',
        icon: GH,
    }
])

const props = defineProps({
    icons: {
        type: Array,
        default: [],
    },
    label: String,
    subLabel: String,
})
</script>

<template>
    <div class="social-container">

        <div class="inner-social-block">

            <div v-for="it in socialIcons" :key="it.id" class="social-link">
                <img :src="it.icon" alt="">
            </div>
        </div>

        <div class="nav-panel">
            <div class="label-block">
                <h4>Let's connect</h4>
                <h1>My social profile</h1>
            </div>
        </div>

        <div class="about-btn">
            <img src="../../assets/icon.svg" alt="">
        </div>
    </div>
</template>

<style lang="scss" scoped>
.social-container {
    position: relative;
    border-radius: 20px;
    background: linear-gradient(to left, #131313, #212121);
    border: 1px solid #1e1e1e;
    padding: 15px;
    display: flex;
    flex-direction: column;
    height: 100%;

    .inner-social-block {
        display: inline-flex;
        align-items: center;
        justify-content: space-between;
        background: linear-gradient(to left, #212121, #131313);
        border: 1px solid #1e1e1e;
        padding: 15px;
        border-radius: 20px;


        .social-link {
            width: 70px;
            height: 70px;
            border-radius: 10rem;
        }
    }

    .nav-panel {
        display: flex;
        width: 100%;
        height: 100%;
        padding: 10px;
        align-items: center;

        .label-block {
            display: flex;
            flex-direction: column;
            text-align: left;
            color: white;

            h4 {
                font-size: large;
                opacity: .6;
            }

            h1 {
                font-size: x-large;
                font-weight: bold;
            }
        }
    }

    .about-btn {
        display: block;
        position: absolute;
        right: 10px;
        bottom: 10px;
        opacity: 0.2;
        transition: 0.3s;
    }

    .about-btn:hover {
        opacity: 1;
        cursor: pointer;
    }
}
</style>