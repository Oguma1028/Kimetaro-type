import type { Restaurant } from './Restaurant'

export interface User {
  id: number
  name: string
  email: string
  password: string
  favoriteRestaurants: Restaurant[]
}
