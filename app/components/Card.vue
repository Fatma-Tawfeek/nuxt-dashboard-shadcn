<template>
    <Card>
        <CardHeader class="px-4 pb-2">
            <div class="flex justify-between items-center">
                <p>{{ card.title }}</p>
                <Badge class="bg-green-400"> {{ "+" + card.progression + "%" }} </Badge>
            </div>
        </CardHeader>
        <CardContent class="flex items-center justify-end px-4 pt-0 border-b">
            <div class="text-[48px] font-[800]">
                <span class="text-neutral-300">$</span>
                <span>{{ card.amount }}</span>
            </div>
        </CardContent>
        <CardFooter class="flex items-center justify-between gap-2 px-2 pt-2">
            <div class="w-8 h-8 bg-neutral-100 flex items-center justify-center">
                <img :src="card.src" :alt="card.title" class="w-6" />
            </div>
            <p class="text-xs grow">{{ card.description }}</p>
            <Button variant="outline">{{ card.label }}</Button>
        </CardFooter>
    </Card>
</template>

<script setup lang="ts">
import { Badge } from "./ui/badge";
import {
    Card,
    CardAction,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
    CardDescription,
} from "./ui/card";

const props = defineProps(["card"]);
onMounted(() => {
    console.log(props.card);
});
// console.log(props.card);
</script>

<style scoped></style>
