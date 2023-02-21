import {
  FormControl,
  FormLabel,
  IconButton,
  HStack,
  Button,
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { FiHeart } from 'react-icons/fi'

type FormData = {
  distance: string
  genre: string
  price: string
}

type Option = {
  value: string
  label: string
}

const Form = () => {
  const [formData, setFormData] = useState<FormData>({
    distance: '',
    genre: '',
    price: '',
  })

  const handleClick = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const genreOptions: Option[] = [
    { value: 'japanese', label: '日本食' },
    { value: 'italian', label: 'イタリア料理' },
    { value: 'chinese', label: '中華料理' },
    { value: 'indian', label: 'インド料理' },
  ]

  const distanceOptions: Option[] = [
    { value: '500', label: '10分以内' },
    { value: '1000', label: '15分くらい' },
    { value: '1500', label: '20分くらい' },
  ]
  const priceOptions: Option[] = [
    { value: '1', label: '安い' },
    { value: '2', label: 'お手頃' },
    { value: '3', label: '普通' },
    { value: '4', label: '高級' },
  ]

  return (
    <>
      {`Lv${formData.price}で`}
      {`${formData.distance}mくらいのとこにある`}
      {`${formData.genre}屋さん`}

      <form>
        <FormControl>
          <FormLabel>金額を選ぶ</FormLabel>
          <HStack p="5" spacing="24px">
            {priceOptions.map((option) => (
              <Button
                key={option.value}
                size="lg"
                onClick={() => handleClick('price', option.value)}
              >
                {option.label}
              </Button>
            ))}
          </HStack>
          <FormLabel>距離を選ぶ</FormLabel>
          <HStack p="5" spacing="24px">
            {distanceOptions.map((option) => (
              <Button
                key={option.value}
                size="lg"
                onClick={() => handleClick('distance', option.value)}
              >
                {option.label}
              </Button>
            ))}
          </HStack>
          <FormLabel>ジャンルを選ぶ</FormLabel>
          <HStack p="5" spacing="24px">
            {genreOptions.map((option) => (
              <IconButton
                key={option.value}
                size="lg"
                aria-label={option.label}
                icon={<FiHeart />}
                onClick={() => handleClick('genre', option.value)}
              >
                {option.label}
              </IconButton>
            ))}
          </HStack>
        </FormControl>
        <Button mb={4}>探す</Button>
      </form>
    </>
  )
}

export default Form
