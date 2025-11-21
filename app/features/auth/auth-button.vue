<script lang="ts" setup>
import AppButton from "~/shared/ui/app-button.vue";
import { useAuthStore } from "~/stores/auth";

const auth = useAuthStore();
</script>

<template>
    <AppButton
        :icon="{ name: 'tabler:brand-github', size: 24 }"
        label="Sign in"
        :loading="auth.loading"
        @click="auth.signIn"
    />
</template>
