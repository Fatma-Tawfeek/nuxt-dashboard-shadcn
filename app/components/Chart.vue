<template>
    <div class="border p-4 rounded-lg"><highchart :options="options" /></div>
</template>

<script setup lang="ts">
let props = defineProps(["currentCategory", "data"]);
let data = props.data || [];
let currentCategory = props.currentCategory || "today";

let categories = ref({
    today: Array.from({ length: 24 }, (_, i) => `${i}:00`),
    week: ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
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

const options = computed(() => {
    return {
        chart: {
            type: "line",
            animation: {
                enabled: false,
            },
        },
        legend: {
            enbled: false,
        },
        title: {
            text: "",
        },
        xAxis: {
            gridLineColor: "transparent",
            categories: categories.value[currentCategory],
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
                enableMouseTracking: false,
            },
        },
        series: [
            {
                name: "line",
                lineWidth: "4px",
                color: {
                    linearGradient: { y1: 0, y2: 1, x1: 0, x2: 0 },
                    stops: [
                        [0, "rgba(252,176,69,1)"],
                        [0.33, "rgba(253,29,29,1)"],
                        [0.66, "rgba(131,58,180,1)"],
                        [1, "rgba(29,217,83,1)"],
                    ],
                },
                data,
            },
        ],
    };
});

function generateMonth() {
    let currentDate = new Date();
    let currentMonth = currentDate.getMonth() + 1;
    let currentYear = currentDate.getFullYear();

    function generateMonthDates() {
        let monthDates = [];
        let daysInMonth = new Date(currentYear, currentMonth, 0).getDate();
        for (let day = 1; day <= daysInMonth; day++) {
            let dayString = ("0" + day).slice(-2);
            let monthString = ("0" + currentMonth).slice(-2);
            monthDates.push(monthString + "/" + dayString);
        }
        return monthDates;
    }
    let month = generateMonthDates();
    categories = { ...categories, month };
    return month;
}

onMounted(() => {
    generateMonth();
});
</script>

<style scoped></style>
