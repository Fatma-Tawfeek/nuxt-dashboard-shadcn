<template>
    <div class="m-2 p-4 rounded border cursor-pointer flex items-center justify-start gap-4">
        <div
            class="w-10 h-10 overflow-hidden rounded-full bg-green-400 flex justify-center items-center font-bold text-white uppercase"
        >
            {{ name[0] }}
        </div>
        <div>
            <p class="mb-0 font-bold text-black text-sm">
                {{ name }}
            </p>
            <p class="mb-0 text-xs">{{ role }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
const name = "Fatma Tawfeek";
const role = "CTO & Youtuber";
</script>

<style scoped></style>
