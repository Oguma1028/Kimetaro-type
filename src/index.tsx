import { Box, Button, Container, VStack } from '@chakra-ui/react'
import Link from 'next/link'
import RootLayout from '@src/layouts/root'
import type { ReactElement } from 'react'

export const Page = () => {
  return (
    <Container>
      <Box>
        <VStack spacing={4}>
          <Link href="signin">
            <Button type={'submit'} colorScheme="red">
              新規登録
            </Button>
          </Link>
          <Link href="signup">
            <Button>ログイン</Button>
          </Link>
          <Link href="/">
            <Button>登録せず始める</Button>
          </Link>
        </VStack>
      </Box>
    </Container>
  )
}

Page.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout>{page}</RootLayout>
}

export default Page
