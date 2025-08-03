<template>
    <div class="border p-4 rounded-lg">
        <highchart :options="options" />
    </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from "vue";

const props = defineProps<{
    currentCategory: string;
    data: number[];
}>();

const categories = ref({
    today: Array.from({ length: 24 }, (_, i) => `${i}:00`),
    week: ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    month: [] as string[],
    year: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ],
});

function generateMonth() {
    const now = new Date();
    const year = now.getFullYear();
    const monthIndex = now.getMonth(); // 0-based
    const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();
    const monthDates: string[] = [];
    for (let d = 1; d <= daysInMonth; d++) {
        const dayString = ("0" + d).slice(-2);
        const monthString = ("0" + (monthIndex + 1)).slice(-2);
        monthDates.push(`${monthString}/${dayString}`);
    }
    categories.value.month = monthDates;
}
generateMonth();

const normalizedCategory = computed(() => props.currentCategory.toLowerCase());

const options = computed(() => {
    return {
        chart: {
            type: "line",
            animation: {
                enabled: false,
            },
        },
        legend: {
            enabled: false,
        },
        title: {
            text: "",
        },
        xAxis: {
            gridLineColor: "transparent",
            categories: categories.value[normalizedCategory.value] || [],
        },
        yAxis: {
            gridLineColor: "transparent",
            title: {
                text: "",
            },
        },
        plotOptions: {
            line: {
                marker: {
                    enabled: false,
                },
                dataLabels: {
                    enabled: false,
                },
                enableMouseTracking: true,
            },
        },
        series: [
            {
                name: "line",
                lineWidth: 4,
                color: {
                    linearGradient: {},
                    stops: [
                        [0, "rgba(252,176,69,1)"],
                        [0.33, "rgba(253,29,29,1)"],
                        [0.66, "rgba(131,58,180,1)"],
                        [1, "rgba(29,217,83,1)"],
                    ],
                },
                data: props.data,
            },
        ],
    };
});
</script>

<style scoped></style>
