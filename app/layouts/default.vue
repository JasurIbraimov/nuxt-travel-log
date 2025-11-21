<script setup lang="ts">
import NavBar from "~/features/nav/nav-bar.vue";
</script>

<template>
    <div class="flex min-h-screen flex-col">
        <NavBar />
        <main>
            <slot />
        </main>
    </div>
</template>
