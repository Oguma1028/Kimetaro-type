import MainLayout from '@src/layouts/main'
import RootLayout from '@src/layouts/root'
import Map from './Map'
import type { ReactElement } from 'react'
import { Container, Heading, Text } from '@chakra-ui/react'
import Form from './SearchForm'

const Page = () => {
  return (
    <>
      <Container maxW="lg">
        <Heading as="h1" size="lg" mb={4}>
          行きたい店を探す
        </Heading>
        <Text mb={4}>お好みのジャンルと距離を選択してください</Text>
        <Form />
        <Map />
      </Container>
    </>
  )
}

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <RootLayout>
      <MainLayout>{page}</MainLayout>
    </RootLayout>
  )
}

export default Page
