import { ref } from 'vue'

export function useFetchAPI(baseURL: string) {
  const loading = ref<boolean>(false)
  const error = ref<string | null>(null)

  const get = async <T>(endpoint: string): Promise<T> => {
    loading.value = true
    error.value = null

    try {
      const response = await fetch(`${baseURL}${endpoint}`)

      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`)
      }

      const data = (await response.json()) as T
      return data
    } catch (err: unknown) {
      if (err instanceof Error) {
        error.value = err.message
        throw err
      } else {
        error.value = 'An unknown error occurred'
        throw new Error(error.value)
      }
    } finally {
      loading.value = false
    }
  }

  return { error, loading, get }
}
