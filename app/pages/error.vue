<script setup lang="ts">
const route = useRoute();
const error = route.query.error || "an unknown error occured.";
</script>

<template>
    <div class="mt-4 bg-base-300 min-h-72 text-center mx-auto flex flex-col gap-4 justify-center max-w-7xl items-center">
        <div class="alert alert-error" role="alert">
            <span>Error! Oh no, {{ error }}</span>
        </div>
        <NuxtLink to="/" class="btn btn-primary">
            Home <Icon name="tabler:home" size="18" />
        </NuxtLink>
    </div>
</template>
