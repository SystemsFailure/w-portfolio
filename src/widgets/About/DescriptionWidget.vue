<script setup>
import CardWidget from './CardWidget.vue';
</script>

<template>
    <div class="description-widget">
        <CardWidget :config="{ height: '100%', width: '100%' }">

            <template #content>

                <div class="container">
                    <img class="decor-1" src="../../assets/icon2.png">
                    <p class="name">Eric Leonhard</p>
                    <h4>
                        Experienced software engineer with over 3 years specializing in backend development and cloud
                        solutions, with a proven track record in enhancing system performance and driving digital
                        transformations. Skilled in developing scalable architectures and engaging digital content,
                        committed to leveraging technology to solve real-world problems.
                    </h4>
                </div>


            </template>

        </CardWidget>
    </div>
</template>

<style lang="scss" scoped>
.description-widget {
    position: relative;
}

.container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding-top: 50px;
    // text-align: left;

    .decor-1 {
        position: absolute;
        top: 0;
        left: 30px;
    }

    p {
        font-size: 30px;
        font-weight: bold;
    }

    h4 {
        font-size: 1.0vw;
        font-weight: 700;
    }
}
</style>