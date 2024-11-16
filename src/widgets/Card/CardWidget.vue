<script setup>
import { defineProps } from 'vue';

// Определяем пропсы
const props = defineProps({
    title: {
        type: String,
        default: ''
    },
    image: {
        type: String,
        default: ''
    }
});
</script>

<template>
    <div class="card">
        <!-- Отображение изображения, если оно передано -->
        <div v-if="image" class="card-image">
            <img :src="image" :alt="title" />
        </div>

        <!-- Заголовок карточки -->
        <div class="card-header" v-if="title">
            <h2>{{ title }}</h2>
        </div>

        <!-- Контент карточки через слот -->
        <div class="card-content">
            <slot></slot>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.card {
    border: 1px solid #ccc;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    max-width: 300px;

    .card-image {
        img {
            width: 100%;
            height: auto;
        }
    }

    .card-header {
        padding: 16px;
        background-color: #f5f5f5;
        border-bottom: 1px solid #ddd;

        h2 {
            margin: 0;
            font-size: 1.5rem;
        }
    }

    .card-content {
        padding: 16px;
    }
}
</style>