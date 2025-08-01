<template>
    <div class="grid gap-8">
        <header class="flex items-start justify-between">
            <div>
                <p>Hi, welcome back Fatma!</p>
                <h1>Dashboard</h1>
            </div>
            <div class="w-[120px] h-[36px] bg-neutral-200"></div>
        </header>
        <main class="grid gap-4">
            <Tabs default-value="Today" @click="setCategory($event)">
                <TabsList class="w-[400px]">
                    <TabsTrigger v-for="(item, index) in list" :key="index" :value="item.title">
                        {{ item.title }}
                    </TabsTrigger>
                </TabsList>
                <TabsContent v-for="(item, index) in list" :key="index" :value="item.title">
                    <Chart v-if="data.length > 0" :data="data" :currentCategory="currentCategory" />
                </TabsContent>
            </Tabs>
        </main>
        <footer>
            <p>Footer</p>
        </footer>
    </div>
</template>

<script setup lang="ts">
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const data = ref([]);

const list = [
    {
        title: "Today",
    },
    {
        title: "Week",
    },
    {
        title: "Month",
    },
    {
        title: "Year",
    },
];

let currentCategory = ref("today");

function generateRandomData(number = 7) {
    let values = [];
    for (let i = 0; i < number; i++) {
        values.push(Math.floor(Math.random() * 100));
    }
    data.value = values;
    return values;
}

const setCategory = (e: any) => {
    let v = e.target.innerText.toLowerCase();
    currentCategory.value = v;
    switch (v) {
        case "today":
            generateRandomData(24);
            break;
        case "week":
            generateRandomData(7);
            break;
        case "month":
            generateRandomData(31);
            break;
        case "year":
            generateRandomData(12);
            break;
        default:
            generateRandomData(24);
            break;
    }
};

onMounted(() => {
    generateRandomData(24);
});
</script>

<style scoped></style>
