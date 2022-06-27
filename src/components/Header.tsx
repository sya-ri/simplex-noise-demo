import React, { FC } from 'react'
import { Box, Container, Flex, Heading, HStack, useDisclosure } from '@chakra-ui/react'
import { FiSettings, FiRotateCcw } from 'react-icons/fi'
import { useRecoilState } from 'recoil'
import SimplexNoise from 'simplex-noise'
import SettingsDrawer from './SettingsDrawer'
import * as states from '../states'
import HeaderButton from './HeaderButton'

const Header: FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [lastOptions, applyOptions] = useRecoilState(states.previewOptions)
  const regenerate = () => applyOptions({ ...lastOptions, simplex: new SimplexNoise() })
  return (
    <Box bg="teal.500" py={2} boxShadow="lg">
      <Container>
        <Flex justify="space-between" m="auto" align="center">
          <Heading fontSize={32} color="gray.800">
            simplex-noise
          </Heading>
          <HStack gap={2}>
            <HeaderButton label="Regenerate" iconType={FiRotateCcw} onClick={regenerate} />
            <HeaderButton label="Open Settings" iconType={FiSettings} onClick={onOpen} />
          </HStack>
        </Flex>
      </Container>
      <SettingsDrawer isOpen={isOpen} onClose={onClose} />
    </Box>
  )
}

export default Header
