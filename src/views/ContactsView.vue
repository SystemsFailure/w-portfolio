<script setup>

</script>

<template>
    <div class="contacts-container">

        <div class="left-block">

        </div>

        <div class="right-block">

            <div class="form">
                <img class="decor-1" src="../assets/icon2.png">

                <h1>Let’s work together.</h1>
                <input type="text" placeholder="Name *">
                <input type="text" placeholder="Email *">
                <input type="text" placeholder="Your subject *">
                <textarea placeholder="Your message..."></textarea>
                <button @clic="() => { }">SEND MESSAGE</button>
            </div>

        </div>

    </div>
</template>

<style lang="scss" scoped>
.contacts-container {

    width: 100%;
    height: 80vh;
    display: flex;
    padding: 20px;



    .left-block {
        width: 100%;
        height: 100%;
        flex: 1 40%;
        display: flex;
        flex-direction: column;
    }

    .right-block {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

        .form {
            width: 90%;
            height: 85%;
            padding: 40px;
            display: flex;
            flex-direction: column;
            align-items: center;

            font-size: medium;
            font-weight: 700;

            position: relative;
            border-radius: 20px;
            background: linear-gradient(to left, #131313, #212121);
            border: 1px solid #1e1e1e;
            color: rgb(180, 180, 180);

            .decor-1 {
                position: absolute;
                top: 0;
                right: 50px;
            }

            h1 {
                font-size: xx-large;
                font-weight: bold;
                text-align: left;
                width: 100%;
                margin-bottom: 20px;
            }

            input {
                width: 100%;
                border: none;
                padding: 15px;
                background: none;
                border-radius: 20px;
                margin-top: 15px;
                border: 1px solid #686868;
            }

            textarea {
                width: 100%;
                border: none;
                padding: 15px;
                background: none;
                border-radius: 20px;
                margin-top: 15px;
                border: 1px solid #686868;
            }

            button {
                width: 100%;
                border: none;
                padding: 15px;
                background: none;
                border-radius: 20px;
                margin-top: 15px;
                border: 1px solid #686868;
            }

            button:hover {
                opacity: .5;
                transition: .3s ease;
            }
        }
    }
}
</style>