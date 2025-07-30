<template>
    <div>
        <header class="flex items-center gap-2 p-2 hover:scale-[101/5] transition cursor-pointer">
            <Logo />
            <p class="font-bold">Nuxt-Finance</p>
        </header>
        <div class="px-4 grow">
            <div class="grid gap-4">
                <div
                    v-for="(item, index) in items"
                    :key="index"
                    class="flex items-center gap-2 px-2 py-1 transition rounded cursor-pointer hover:bg-neutral-100"
                >
                    <img :src="item.src" :alt="item.title" class="w-6" />
                    <span>{{ item.title }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const items = ref([
    {
        title: "Overview",
        to: "/",
        src: "/images/dashboard-svgrepo-com.svg",
    },
    {
        title: "Transactions",
        to: "/transactions",
        src: "/images/transactions-svgrepo-com.svg",
    },
    {
        title: "Account",
        to: "/account",
        src: "/images/account-svgrepo-com.svg",
    },
    {
        title: "Contacts",
        to: "/contacts",
        src: "/images/contacts-svgrepo-com.svg",
    },
    {
        title: "Settings",
        to: "/settings",
        src: "/images/settings-svgrepo-com.svg",
    },
]);
</script>

<style scoped></style>
