<script setup>
const props = defineProps({
    image: String,
    label: String,
    subLabel: String,
})
</script>

<template>
    <div class="about_card">

        <div class="info-box">
            <img :src="props.image" >

            <div class="infos">
                <div class="tile-title">
                    <h4 v-text="props.label"></h4>
                </div>
                <div class="about-btn">
                    <img src="../../assets/icon.svg" alt="">
                </div>
            </div>
        </div>

    </div>
</template>

<style lang="scss" scoped>
.about_card {
    position: relative;
    border-radius: 20px;
    background: linear-gradient(to left, #131313, #212121);
    border: 1px solid #1e1e1e;
    flex: 1;
    color: rgb(180, 180, 180);
    
    .info-box {
        padding: 20px;
        // display: flex;
        // flex-direction: column;
        // justify-content: center;


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
}

.about_card:hover {
    cursor: pointer;
    transition: .3s ease;
    background: linear-gradient(to left, #b96601, #0f4153);
}
</style>