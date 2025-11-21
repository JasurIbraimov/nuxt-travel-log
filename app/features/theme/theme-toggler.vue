<script lang="ts" setup>
import { useColorMode } from "#imports";
import { computed } from "vue";

import AppSwitch from "~/shared/ui/app-switch.vue";

const colorMode = useColorMode();

const isDark = computed({
    get: () => colorMode.value === "dark",
    set: (value: boolean) => {
        colorMode.preference = value ? "dark" : "light";
    },
});
</script>

<template>
    <AppSwitch
        v-model="isDark"
        :icons="{
            on: { name: 'tabler:sun', size: 24 },
            off: { name: 'tabler:moon-filled', size: 24 },
        }"
    />
</template>
