<script setup lang="ts">
import AuthButton from "~/features/auth/auth-button.vue";
</script>

<template>
    <div class="hero bg-base-200 container m-auto mt-4 p-10">
        <div class="hero-content text-center">
            <div class="max-w-md">
                <h1 class="text-5xl font-bold">
                    Hello there
                </h1>
                <p class="py-6">
                    Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                    quasi. In deleniti eaque aut repudiandae et a id nisi.
                </p>
                <AuthButton />
            </div>
        </div>
    </div>
</template>
