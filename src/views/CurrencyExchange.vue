<template>
  <main>
    <div>
      <InputText
        type="text"
        v-model="amount"
        size="large"
        placeholder="Provide amount"
      />
    </div>
    <SelectElement v-model="fromCurrency" :options="testArr" />
    <SelectElement v-model="toCurrency" :options="testArr2" />
  </main>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useFetchAPI } from '@/services/useFetchAPI'
import SelectElement from '@/components/shared/SelectElement.vue'
import InputText from 'primevue/inputtext'
import type { Currency } from '@/types'

const fromCurrency = ref<Currency | null>(null)
const toCurrency = ref<Currency | null>(null)
const amount = ref<string>('')

const testArr = [
  { id: 1, name: 'kuba', short_code: 'KU', code: 'KubaB' },
  { id: 2, name: 'mark', short_code: 'MK', code: 'MarkV' },
]
const testArr2 = [
  { id: 1, name: 'kuba', short_code: 'KU', code: 'KubaB' },
  { id: 2, name: 'mark', short_code: 'MK', code: 'MarkV' },
]
onMounted(async () => {
  // try {
  //   currencies.value = await get<string>('v1/currencies')
  //   console.log(currencies.value)
  // } catch (err) {
  //   console.error('Failed to fetch currencies:', err)
  // }
})
const selectedCurrency = ref(null)
</script>
