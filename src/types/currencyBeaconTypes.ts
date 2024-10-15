export interface Currency {
  id: number
  name: string
  short_code: string
  code: string
  precision: number
  subunit: number
  symbol: string
  symbol_first: boolean
  decimal_mark: string
  thousands_separator: string
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

export interface ConvertedValue {
  amount: number
  date: string
  from: string
  timestamp: number
  to: string
  value: number
}
export interface ConvertResponse {
  meta: Meta
  response: ConvertedValue
  [key: string]: unknown
}
