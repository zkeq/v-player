<template>
  <section class="d-flex justify-center">
    <div style="max-width: 840px" class="d-flex flex-column gap-4 flex-fill">
      <h6 class="text-h5 mb-4">{{ $t('common.setting') }}</h6>
      <app-settings-theme />
      <app-settings-other />
      <v-alert border="start" variant="tonal" closable close-label="小贴士" color="primary" title="小贴士">
        应用无响应时，通过ctrl + r / cmd + r 可以刷新重启应用，可以解决一部分问题。
      </v-alert>
    </div>
  </section>
</template>

<script setup lang="ts">
import AppSettingsOther from './components/Other.vue'
import AppSettingsTheme from './components/Theme.vue'
</script>
