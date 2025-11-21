<script setup lang="ts">
import AppButton from "~/shared/ui/app-button.vue";

const { availableLocales, setLocale } = useI18n();
</script>

<template>
    <div class="dropdown">
        <AppButton
            variant="ghost"
            outline
            :label="$t('buttons.pick_language')"
            :icon="{ name: 'tabler:language', size: 24 }"
        />
        <ul tabindex="0" class="menu gap-4 dropdown-content bg-base-100 rounded-box z-1 p-4 w-32 shadow-sm">
            <AppButton
                v-for="lang in availableLocales"
                :key="lang"
                outline
                :label="lang"
                @click="setLocale(lang);"
            />
        </ul>
    </div>
</template>
