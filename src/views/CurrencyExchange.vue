<template>
  <main>
    <SelectElement v-model="selectedCurrency" :options="testArr" />
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import SelectElement from '@/components/shared/SelectElement.vue'

const testArr = [
  { id: 1, name: 'kuba', short_code: 'KU', code: 'KubaB' },
  { id: 2, name: 'mark', short_code: 'MK', code: 'MarkV' },
]
const selectedCurrency = ref(null)
</script>
