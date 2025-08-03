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
            <!-- ربط مباشر بالقيمة -->
            <Tabs v-model="currentCategory">
                <TabsList class="w-[400px]">
                    <TabsTrigger
                        v-for="(item, index) in list"
                        :key="index"
                        :value="item.title.toLowerCase()"
                    >
                        {{ item.title }}
                    </TabsTrigger>
                </TabsList>
                <TabsContent
                    v-for="(item, index) in list"
                    :key="index"
                    :value="item.title.toLowerCase()"
                >
                    <Chart v-if="data.length > 0" :data="data" :currentCategory="currentCategory" />
                </TabsContent>
            </Tabs>
        </main>
        <footer>
            <div class="grid lg:grid-cols-3 gap-4">
                <Card v-for="(card, index) in cards" :key="index" :card="card" />
            </div>
        </footer>
    </div>
</template>

<script setup lang="ts">
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ref, watch, onMounted } from "vue";
import Card from "~/components/Card.vue";

const list = [{ title: "Today" }, { title: "Week" }, { title: "Month" }, { title: "Year" }];

const currentCategory = ref("today");
const data = ref<number[]>([]);

function generateRandomData(number = 7) {
    const values: number[] = [];
    for (let i = 0; i < number; i++) {
        values.push(Math.floor(Math.random() * 100));
    }
    data.value = values;
}

onMounted(() => {
    generateRandomData(24);
});

watch(
    () => currentCategory.value,
    (v) => {
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
        }
    },
    { immediate: true }
);

const cards = [
    {
        title: "Sales",
        progression: 12,
        amount: 1244.43,
        label: "View sales",
        description: "Sales of March 2024",
        src: "/images/sales-up-graph-svgrepo-com.svg",
    },
    {
        title: "Refundes",
        progression: 8,
        amount: 84.44,
        label: "View refundes",
        description: "Refundes since beginning of the year",
        src: "/images/refund-svgrepo-com.svg",
    },
    {
        title: "Payouts",
        progression: 14,
        amount: 899.99,
        label: "View payouts",
        description: "Payouts of rhis week",
        src: "/images/search-money-svgrepo-com.svg",
    },
];
</script>

<style scoped></style>
