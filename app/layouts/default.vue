<template>
    <div class="grid lg:flex items-start">
        <div>
            <Sidebar />
        </div>
        <div class="p-8 w-full">
            <slot />
        </div>
    </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
