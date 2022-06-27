import React, { FC } from 'react'
import { Box, Container, Flex, Heading, HStack, Icon, IconButton, Tooltip, useDisclosure } from '@chakra-ui/react'
import { FiSettings, FiRotateCcw } from 'react-icons/fi'
import { useRecoilState } from 'recoil'
import SimplexNoise from 'simplex-noise'
import SettingsDrawer from './SettingsDrawer'
import * as states from '../states'

const Header: FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [lastOptions, applyOptions] = useRecoilState(states.previewOptions)
  return (
    <Box bg="teal.500" py={2} boxShadow="lg">
      <Container>
        <Flex justify="space-between" m="auto" align="center">
          <Heading fontSize={32} color="gray.800">
            simplex-noise
          </Heading>
          <HStack gap={2}>
            <Tooltip label="Regenerate">
              <IconButton
                aria-label="Regenerate"
                colorScheme="teal"
                color="gray.800"
                rounded="full"
                onClick={() => {
                  applyOptions({ ...lastOptions, simplex: new SimplexNoise() })
                }}
              >
                <Icon as={FiRotateCcw} w={6} h={6} />
              </IconButton>
            </Tooltip>
            <Tooltip label="Open Settings">
              <IconButton
                aria-label="Open Settings"
                colorScheme="teal"
                color="gray.800"
                rounded="full"
                onClick={onOpen}
              >
                <Icon as={FiSettings} w={6} h={6} />
              </IconButton>
            </Tooltip>
          </HStack>
        </Flex>
      </Container>
      <SettingsDrawer isOpen={isOpen} onClose={onClose} />
    </Box>
  )
}

export default Header
