<script setup lang="ts">
import AuthButton from "~/features/auth/auth-button.vue";

import ThemeToggler from "../theme/theme-toggler.vue";
</script>

<template>
    <nav class="navbar bg-primary text-primary-content">
        <div class="navbar-start">
            <NuxtLink class="btn btn-ghost text-xl" to="/">
                Travel Log
            </NuxtLink>
        </div>

        <div class="navbar-end">
            <ThemeToggler />
            <AuthButton />
        </div>
    </nav>
</template>
