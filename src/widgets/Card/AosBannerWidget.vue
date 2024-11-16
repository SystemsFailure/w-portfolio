<script setup>

</script>

<template>
    <div class="marquee-container">
        <div class="marquee">
            <div class="marquee-item">Элемент 1</div>
            <div class="marquee-item">Элемент 2</div>
            <div class="marquee-item">Элемент 3</div>
            <div class="marquee-item">Элемент 4</div>
            <!-- Добавьте больше элементов, если необходимо -->
        </div>
    </div>
</template>

<style lang="scss" scoped>
.marquee-container {
    border-radius: 20px;
    background: linear-gradient(to left, #131313, #212121);
    overflow: hidden;
    white-space: nowrap;
    width: 100%;
    box-sizing: border-box;
}

.marquee {
    display: inline-block;
    white-space: nowrap;
    animation: marquee 10s linear infinite;
}

.marquee-item {
    display: inline-block;
    padding: 0 20px;
    height: 50px;
    /* Отступы между элементами */
}

@keyframes marquee {
    0% {
        transform: translateX(100%);
    }

    100% {
        transform: translateX(-100%);
    }
}
</style>