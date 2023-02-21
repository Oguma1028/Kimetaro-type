export interface Restaurant {
  id: string
  name: string
  address: string
  distance: '0.5km' | '1.0km' | '1.5km'
  priceRange: 'cheap' | 'reasonable' | 'normal' | 'expensive'
  genre: 'Japanese' | 'Western' | 'Chinese' | 'Indian'
  isVisited: boolean
  isFavorite: boolean
  passCount: number
  rating: number
  priceLevel: number
  types: string[]
  geometry: {
    location: {
      lat: number
      lng: number
    }
  }
  photos: {
    photo_reference: string
  }[]
}
