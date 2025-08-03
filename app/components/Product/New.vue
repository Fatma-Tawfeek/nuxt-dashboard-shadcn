<script setup lang="ts">
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const { loading, open } = useHelpers();
const createProduct = () => {
    try {
        loading.value = true;
        // all business logic
    } catch (error) {
        console.log(error);
    } finally {
        loading.value = false;
        open.value = false;
    }
};
</script>

<template>
    <AlertDialog :open="open">
        <AlertDialogTrigger>
            <Button @click="open = true">Add a new product</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
            <AlertDialogHeader>
                <AlertDialogTitle>Create new Product</AlertDialogTitle>
                <Input placeholder="Product name" />
            </AlertDialogHeader>
            <AlertDialogFooter>
                <AlertDialogCancel @click="open = false">Cancel</AlertDialogCancel>
                <AlertDialogAction @click="createProduct">Create</AlertDialogAction>
            </AlertDialogFooter>
        </AlertDialogContent>
    </AlertDialog>
</template>
