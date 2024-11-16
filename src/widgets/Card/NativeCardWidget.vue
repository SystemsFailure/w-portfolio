<script setup>

const props = defineProps({
    config: Object,
    backgroundColor: String,
    hoverEffect: Number || String,
    typeSlot: Number || String,
})

</script>

<template>
    <div class="native_card" :style="{ ...props.config, backgroundColor: props.backgroundColor }">

        <div class="slot_v1" v-if="props.typeSlot === 'v1'">
            <img class="img_avatar" src="../../assets/person-1.png" width="200px">
            <div class="title">
                <h4></h4>
                <h1 class="name">Eric Leonhard</h1>
                <p>Software Engineer</p>
            </div>
            <div class="about-btn"><img src="../../assets/icon.svg" alt=""></div>
        </div>

        <div class="slot_v2" v-if="props.typeSlot === 'v2'">

        </div>

    </div>
</template>

<style lang="scss" scoped>
@import '../../styles/vars.scss';

.native_card {
    position: relative;
    display: flex;
    align-items: flex-start;
    border-radius: 20px;
    background: linear-gradient(to left, #131313, #212121);
    border: 1px solid #1e1e1e;
    padding: 40px;
    width: 100%;

    .slot_v1 {
        display: flex;
        align-items: center;

        .img_avatar {
            border-radius: 30px 0px;
            object-fit: contain;
            border: 1px solid $base-border-color;
        }

        .title {
            margin-left: 20px;
            display: flex;
            flex-direction: column;

            h4 {
                color: #BCBCBC;
                opacity: 0.7;
                letter-spacing: 0.3px;
                margin-bottom: 3px;
            }

            h1 {
                font-size: 36px;
                line-height: 40px;
                color: #fff;
                font-weight: 500;
                margin-bottom: 12px;
            }

            p {
                text-align: left;
                letter-spacing: 0.3px;
                margin: 0;
                font-weight: 700;
                font-size: 17px;
            }
        }

        .about-btn {
            display: block;
            position: absolute;
            right: 30px;
            bottom: 30px;
            opacity: 0.2;
            transition: 0.3s;
        }

        .about-btn:hover {
            opacity: 1;
        }
    }

    .slot_v2 {}

}

.native_card:hover {
    cursor: pointer;
    transition: .3s ease;
    background: linear-gradient(to left, #010101, #0f4153);
}
</style>