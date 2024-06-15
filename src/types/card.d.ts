export type CardTypeResponse = {
  id: string
  name: string
  description: string
  imageUrl: string
  createdAt: string
}

export interface CardsListResponse {
  list: CardTypeResponse[]
  rpp: number
  page: number
  more: boolean
}
