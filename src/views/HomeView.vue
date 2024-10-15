<template>
  <main class="mainWrapper">
    <div class="selectCurrencyWrapper">
      <p>from:</p>
      <SelectElement v-model="fromCurrency" :options="currencies" />
      <p>to:</p>
      <SelectElement v-model="toCurrency" :options="currencies" />
    </div>
    <div class="amountWrapper">
      <InputText
        type="text"
        v-model="amount"
        size="large"
        placeholder="For example: 200.50"
        :disabled="!fromCurrency"
        aria-describedby="amount-help"
      />
      <small id="amount-help"
        >Enter amount value that you want to convert.</small
      >
    </div>
    <Button label="Convert" @click="convertCurrency" />
    <div class="convertedAmountWrapper">
      <p v-show="convertedAmount">
        {{ convertedAmount }} {{ toCurrency?.short_code }}
      </p>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useFetchAPI } from '@/services/useFetchAPI'
import SelectElement from '@/components/shared/SelectElement.vue'
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
import type { Currency, CurrenciesResponse, ConvertResponse } from '@/types'

const currencies = ref<Currency[] | null>(null)
const fromCurrency = ref<Currency | null>(null)
const toCurrency = ref<Currency | null>(null)
const amount = ref<string>('')
const convertedAmount = ref<number | null>(null)
const { get } = useFetchAPI(
  'https://api.currencybeacon.com',
  import.meta.env.VITE_APP_API_KEY,
)

onMounted(async () => {
  try {
    const data = await get<CurrenciesResponse>('/v1/currencies', '&type=fiat')
    currencies.value = data.response
  } catch (err) {
    console.error('Failed to fetch currencies:', err)
  }
})

const convertCurrency = async (): Promise<void> => {
  const data = await get<ConvertResponse>(
    '/v1/convert',
    `&from=${fromCurrency.value?.short_code}&to=${toCurrency.value?.short_code}&amount=${amount.value}`,
  )
  convertedAmount.value = data.response.value
}
</script>

<style scroped>
.mainWrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  gap: 1.5rem;
}

.selectCurrencyWrapper,
.amountWrapper,
.convertedAmountWrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.selectCurrencyWrapper {
  gap: 1rem;
}

.amountWrapper input,
.convertedAmountWrapper input {
  width: 300px;
}

.amountWrapper {
  display: flex;
  flex-direction: column;
}

.convertedAmountWrapper {
  height: 50px;
}
</style>
