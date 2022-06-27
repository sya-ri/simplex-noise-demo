import React, { FC } from 'react'
import { Box, Container, Flex, Heading } from '@chakra-ui/react'

const Header: FC = () => {
  return (
    <Box bg="teal.400" py={2} boxShadow="lg">
      <Container>
        <Flex justify="center">
          <Heading color="gray.800">simplex-noise</Heading>
        </Flex>
      </Container>
    </Box>
  )
}

export default Header
