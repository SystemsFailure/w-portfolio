<script setup>
const imgArray = [
    {
        id: 0,
        url: 'https://firebasestorage.googleapis.com/v0/b/sds-publisher.appspot.com/o/PROFILE-SITE%2Ficons-services%2Fpython.png?alt=media&token=caf292f9-d471-4ae5-a806-8793f6eb0f7d',
        label: 'Python'
    },
    {
        id: 1,
        url: 'https://firebasestorage.googleapis.com/v0/b/sds-publisher.appspot.com/o/PROFILE-SITE%2Ficons-services%2Fjs-yallow.png?alt=media&token=9384f571-ca9c-4672-a567-94daf96a9b42',
        label: 'JavaScript'
    },
    {
        id: 2,
        url: 'https://firebasestorage.googleapis.com/v0/b/sds-publisher.appspot.com/o/PROFILE-SITE%2Ficons-services%2Fhtml.png?alt=media&token=2b7a688b-267c-409e-9a4d-cd5f5ad900ea',
        label: 'HTML5'
    },
    {
        id: 3,
        url: 'https://firebasestorage.googleapis.com/v0/b/sds-publisher.appspot.com/o/PROFILE-SITE%2Ficons-services%2Fmicriservices.png?alt=media&token=6a818345-0e00-48a5-b3d1-0b65bbe3dd52',
        label: 'Microservices'
    },
    {
        id: 4,
        url: 'https://firebasestorage.googleapis.com/v0/b/sds-publisher.appspot.com/o/PROFILE-SITE%2Ficons-services%2Fmysql.png?alt=media&token=156a2b30-161a-4a83-bb90-2d9a7e0f6dfd',
        label: 'MySql'
    },
    {
        id: 5,
        url: 'https://firebasestorage.googleapis.com/v0/b/sds-publisher.appspot.com/o/PROFILE-SITE%2Ficons-services%2Fnikto-logo.svg?alt=media&token=082fc3ff-0210-45e6-894d-78d6ab3442ff',
        label: 'Nikto'
    },
    {
        id: 6,
        url: 'https://firebasestorage.googleapis.com/v0/b/sds-publisher.appspot.com/o/PROFILE-SITE%2Ficons-services%2Fnode.png?alt=media&token=590724a9-2a9b-43c6-a4d3-e9a35899e381',
        label: 'Node.js'
    },
    {
        id: 7,
        url: 'https://firebasestorage.googleapis.com/v0/b/sds-publisher.appspot.com/o/PROFILE-SITE%2Ficons-services%2Fnumpy.png?alt=media&token=2dcd7eac-f504-4eca-b208-48e76b320ba4',
        label: 'Numpy'
    },
    {
        id: 8,
        url: 'https://firebasestorage.googleapis.com/v0/b/sds-publisher.appspot.com/o/PROFILE-SITE%2Ficons-services%2Fowasp.png?alt=media&token=33d762d3-b382-4dd4-aaf6-4a2388816e3a',
        label: 'Owasp'
    },

    {
        id: 9,
        url: 'https://firebasestorage.googleapis.com/v0/b/sds-publisher.appspot.com/o/PROFILE-SITE%2Ficons-services%2FQT.png?alt=media&token=7017a31d-e792-426f-8656-cea4b7fd4f55',
        label: 'Qt5'
    },
    {
        id: 10,
        url: 'https://firebasestorage.googleapis.com/v0/b/sds-publisher.appspot.com/o/PROFILE-SITE%2Ficons-services%2FOpenAPI.png?alt=media&token=f396dbfb-7f09-4497-998f-84d7647a62fb',
        label: 'OpenApi'
    },
    {
        id: 11,
        url: 'https://firebasestorage.googleapis.com/v0/b/sds-publisher.appspot.com/o/PROFILE-SITE%2Ficons-services%2Fvue.png?alt=media&token=e7300969-2e1a-4836-9f5d-cb1ede51ae9d',
        label: 'Vue3'
    },
    {
        id: 12,
        url: 'https://firebasestorage.googleapis.com/v0/b/sds-publisher.appspot.com/o/PROFILE-SITE%2Ficons-services%2Fserver.png?alt=media&token=aaba80a1-97db-4061-be06-7be5d4697158',
        label: 'Clouds'
    },
    {
        id: 13,
        url: 'https://firebasestorage.googleapis.com/v0/b/sds-publisher.appspot.com/o/PROFILE-SITE%2Ficons-services%2Fqualys.png?alt=media&token=efb48603-cdb2-4f52-b4b7-ff41b0d9ee6e',
        label: 'Qualys'
    },

]
</script>

<template>
    <div class="marquee-container">
        <div class="marquee">
            <Vue3Marquee>
                <div v-for="img in imgArray" :key="img.id" style="display: flex; align-items: center;">
                    <img :src="img.url" width="30px" height="30px" style="margin-left: 40px;" />
                    <h6 style="margin-left: 10px;" v-text="img.label"></h6>
                </div>
            </Vue3Marquee>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.marquee-container {
    border-radius: 50px;
    background: linear-gradient(to left, #131313, #212121);
    border: 1px solid #1e1e1e;
    width: 500px;
}

.marquee {
    padding: 10px;
}
</style>