<script lang="ts" setup>
const { loading, onClick, label, icon } = defineProps<{
    loading?: boolean;
    onClick?: ((payload: PointerEvent) => void) | undefined;
    label?: string;
    icon?: {
        name: string;
        size: number;
    };

}>();
</script>

<template>
    <button
        :disabled="loading"
        class="btn btn-accent"
        @click="onClick?.($event)"
    >
        {{ label }}
        <span v-if="loading" class="loading loading-spinner loading-md" />
        <Icon v-else-if="icon" :name="icon.name" :size="icon.size" />
    </button>
</template>
