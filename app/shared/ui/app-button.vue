<script lang="ts" setup>
import { cva } from "class-variance-authority";

const { loading, onClick, label, icon, variant, outline } = defineProps<{
    loading?: boolean;
    onClick?: ((payload: PointerEvent) => void) | undefined;
    label?: string;
    icon?: {
        name: string;
        size: number;
    };
    outline?: boolean;
    variant?: "info" | "accent" | "ghost" | "error" | "neutral" | "secondary" | "success" | "warning";

}>();

const buttonClasses = cva("btn", {
    variants: {
        variant: {
            info: "btn-info",
            accent: "btn-accent",
            ghost: "btn-ghost",
            error: "btn-error",
            neutral: "btn-neutral",
            secondary: "btn-secondary",
            success: "btn-success",
            warning: "btn-warning",
        },
        outline: {
            true: "btn-outline",
        },
    },
    defaultVariants: {
        variant: "accent",
        outline: false,
    },
});
</script>

<template>
    <button
        :disabled="loading"
        :class="buttonClasses({ variant, outline })"
        @click="onClick?.($event)"
    >
        {{ label }}
        <span v-if="loading" class="loading loading-spinner loading-md" />
        <Icon v-else-if="icon" :name="icon.name" :size="icon.size" />
    </button>
</template>
