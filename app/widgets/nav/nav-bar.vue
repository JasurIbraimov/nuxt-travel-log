<script setup lang="ts">
import AuthButton from "~/features/auth/auth-button.vue";
import ThemeToggler from "~/features/theme/theme-toggler.vue";
import LanguagePicker from "~/features/translation/language-picker.vue";
</script>

<template>
    <nav class="navbar bg-primary text-primary-content">
        <div class="navbar-start">
            <NuxtLink class="btn btn-ghost text-xl" to="/">
                {{ $t("title") }}
            </NuxtLink>
        </div>

        <div class="navbar-end gap-2">
            <LanguagePicker />
            <ThemeToggler />
            <AuthButton />
        </div>
    </nav>
</template>
