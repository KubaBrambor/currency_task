export interface Currency {
  id: number
  name: string
  short_code: string
  code: string
}

export interface Meta {
  code: number
  disclaimer: string
}

export interface CurrenciesResponse {
  meta: Meta
  response: Currency[]
  [key: string]: unknown
}
