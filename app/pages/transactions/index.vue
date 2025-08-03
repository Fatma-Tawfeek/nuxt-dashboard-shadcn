<template>
    <div class="grid gap-8">
        <header class="flex items-start justify-between">
            <div>
                <p>All your transactions</p>
                <h1>Transactions</h1>
            </div>
            <ProductNew />
        </header>
        <DataTable :data="data" :columns="columns" />
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { columns } from "./columns";
const data = ref<any>([]);

function generateRandomData(numObjects: number) {
    const statuses = ["pending", "processing", "completed"];
    const emails = ["example@gmail.com", "me@example.com", "test@example.com", "user@example.com"];

    const randomData: any[] = [];

    for (let i = 0; i < numObjects; i++) {
        const id = Math.random().toString(36).substring(2, 8);
        const amount = Math.floor(Math.random() * 500) + 50; // Random amount between 50 and 550
        const status = statuses[Math.floor(Math.random() * statuses.length)];
        const email = emails[Math.floor(Math.random() * emails.length)];

        randomData.push({ id, amount, status, email });
    }

    return (data.value = randomData);
}

onMounted(() => {
    generateRandomData(10);
});
</script>

<style scoped></style>
