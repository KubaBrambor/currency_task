<template>
  <Select
    v-model="internalValue"
    :options="options"
    filter
    optionLabel="name"
    placeholder="Select currency"
    class="w-full md:w-56"
  >
    <template #value="slotProps">
      <div v-if="slotProps.value" class="flex items-center">
        <div>{{ slotProps.value.name }}</div>
      </div>
      <span v-else>
        {{ slotProps.placeholder }}
      </span>
    </template>
    <template #option="slotProps">
      <div class="flex items-center">
        <div>{{ slotProps.option.name }}</div>
      </div>
    </template>
  </Select>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
import Select from 'primevue/select'
import type { Currency } from '@/types'

const props = defineProps<{
  modelValue: Currency | null
  options: Currency[] | null
}>()

const emit = defineEmits(['update:modelValue'])

const internalValue = ref(props.modelValue)

watch(
  () => props.modelValue,
  newValue => {
    internalValue.value = newValue
  },
)

function updateValue(value: Currency | null) {
  emit('update:modelValue', value)
}

watch(internalValue, newValue => {
  updateValue(newValue)
})
</script>
