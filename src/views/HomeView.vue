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
    <div>
      <SelectElement v-model="fromCurrency" :options="currencies" />
      <SelectElement v-model="toCurrency" :options="currencies" />
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useFetchAPI } from '@/services/useFetchAPI'
import SelectElement from '@/components/shared/SelectElement.vue'
import InputText from 'primevue/inputtext'
import type { Currency, CurrenciesResponse } from '@/types'

const currencies = ref<Currency[] | null>(null)
const fromCurrency = ref<Currency | null>(null)
const toCurrency = ref<Currency | null>(null)
const amount = ref<string>('')
const { get } = useFetchAPI(
  'https://api.currencybeacon.com',
  import.meta.env.VITE_APP_API_KEY,
)
onMounted(async () => {
  try {
    const data = await get<CurrenciesResponse>('/v1/currencies', '&type=fiat')
    currencies.value = data.response
    console.log(currencies.value)
  } catch (err) {
    console.error('Failed to fetch currencies:', err)
  }
})
</script>
