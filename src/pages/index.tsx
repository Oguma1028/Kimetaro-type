import type { NextPage } from 'next'
import { Box, Button, Container, VStack } from '@chakra-ui/react'
import Link from 'next/link'

const Page: NextPage = () => {
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

export default Page
