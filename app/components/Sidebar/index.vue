<template>
    <div class="relative">
        <div class="z-50 flex lg:hidden items-center justify-between w-full min-h-screen p-4">
            <Logo />
            <img
                src="/images/hamburger-menu-svgrepo-com.svg"
                alt="hamburger"
                class="w-8 h-8 cursor-pointer left-2 top-2"
                @click="open = !open"
            />
            <div v-if="open" class="fixed top-0 left-0 z-50 w-full min-h-screen bg-white">
                <img
                    src="/images/close-svgrepo-com.svg"
                    alt="hamburger"
                    class="absolute w-8 h-8 cursor-pointer right-4 top-4"
                    @click="open = !open"
                />
                <SidebarMenu />
            </div>
        </div>
        <div class="hidden lg:flex w-[250px] h-screen flex flex-col justify-between border-r">
            <SidebarMenu />
            <UserItem />
        </div>
    </div>
</template>

<script setup lang="ts">
const open = ref(false);
</script>

<style scoped></style>
