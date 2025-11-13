<script lang="ts" setup>
import { useAuthStore } from "~/stores/auth";

const auth = useAuthStore();
</script>

<template>
    <button :disabled="auth.loading" class="btn btn-accent" @click="auth.signIn">
        Sign in with Github
        <span v-if="auth.loading" class="loading loading-spinner loading-md" />
        <Icon v-else name="tabler:brand-github" size="24" />
    </button>
</template>
