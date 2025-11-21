<script lang="ts" setup>
// Пропсы для кастомных иконок
const props = defineProps<{
    modelValue: boolean;
    icons?: {
        on?: { name: string; size: number };
        off?: { name: string; size: number };
    };
}>();

const emit = defineEmits<{
    (e: "update:modelValue", value: boolean): void;
}>();

const value = computed({
    get: () => props.modelValue,
    set: (val: boolean) => emit("update:modelValue", val),
});

// Дефолтные иконки
const onIcon = props.icons?.on || { name: "tabler:toggle-right", size: 24 };
const offIcon = props.icons?.off || { name: "tabler:toggle-left", size: 24 };
</script>

<template>
    <label class="swap swap-rotate cursor-pointer">
        <input v-model="value" type="checkbox">
        <Icon class="swap-on" :name="onIcon.name" :size="onIcon.size" />
        <Icon class="swap-off" :name="offIcon.name" :size="offIcon.size" />
    </label>
</template>
