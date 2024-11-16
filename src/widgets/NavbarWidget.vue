<script setup>
import ButtonWidget from '@/widgets/Button/ButtonWidget.vue';
import { ref, reactive, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

const config = () => {
    selectedItem.value = menus.find(it => it.route === `/${route.name}`)?.id;
}

const teleportView = (item) => {
    selectedItem.value = item.id;
    router.push(item.route);
}

onMounted(() => {
    config();
})

const selectedItem = ref(0);

const menus = reactive([
    {
        id: 0,
        label: 'Home',
        route: '/home',
    },
    {
        id: 1,
        label: 'About',
        route: '/about',
    },
    {
        id: 2,
        label: 'Works',
        route: '/works',
    },
    {
        id: 3,
        label: 'Contacts',
        route: '/contacts',
    },
])
</script>

<template>
    <div class="navbar">
        <img src="../assets/logo.png">

        <div class="nav_list">
            <div class="list_items" v-for="item in menus" :key="item.id" @click="teleportView(item)">
                <span :style="selectedItem === item.id ? { color: 'white' } : undefined" v-text="item.label"></span>
            </div>
        </div>

        <ButtonWidget :text="'Let\'s connect'" :border="true"></ButtonWidget>
    </div>
</template>

<style lang="scss" scoped>

.navbar {
    position: sticky;
    top: 0;
    width: 100%;
    height: fit-content;
    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
        width: 400px;
    }

    .nav_list {
        display: flex;

        .list_items span {
            margin-left: 25px;
            font-size: larger;
            font-weight: bold;
        }

        .list_items span:hover {
            cursor: pointer;
            color: white;
            transition: .3s ease;
        }
    }
}

</style>