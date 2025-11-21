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

        <div class="navbar-end">
            <div class="dropdown dropdown-left">
                <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
                </div>
                <div
                    tabindex="-1"
                    class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 gap-4 w-52 px-4 py-8 shadow-lg top-full"
                >
                    <ThemeToggler />
                    <AuthButton />
                    <LanguagePicker />
                </div>
            </div>
        </div>
    </nav>
</template>
