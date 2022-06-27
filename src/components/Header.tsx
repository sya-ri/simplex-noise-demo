import React, { FC } from 'react'
import { Box, Container, Flex, Heading, Icon, IconButton, useDisclosure } from '@chakra-ui/react'
import { FiSettings } from 'react-icons/fi'
import SettingsDrawer from './SettingsDrawer'

const Header: FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Box bg="teal.500" py={2} boxShadow="lg">
      <Container>
        <Flex justify="space-between" m="auto" align="center">
          <Heading fontSize={32} color="gray.800">
            simplex-noise
          </Heading>
          <IconButton aria-label="Open Settings" colorScheme="teal" color="gray.800" rounded="full" onClick={onOpen}>
            <Icon as={FiSettings} w={6} h={6} />
          </IconButton>
        </Flex>
      </Container>
      <SettingsDrawer isOpen={isOpen} onClose={onClose} />
    </Box>
  )
}

export default Header
