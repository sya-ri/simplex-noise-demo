import React, { FC, useState } from 'react'
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  FormLabel,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Stack
} from '@chakra-ui/react'
import { useRecoilState } from 'recoil'
import * as states from '../states'

export type SettingsDrawerProps = {
  isOpen: boolean
  onClose: () => void
}

const SettingsDrawer: FC<SettingsDrawerProps> = ({ isOpen, onClose }) => {
  const [lastOptions, applyOptions] = useRecoilState(states.previewOptions)
  const [options, setOptions] = useState(lastOptions)
  const close = () => {
    setOptions(lastOptions)
    onClose()
  }
  return (
    <Drawer isOpen={isOpen} placement="right" onClose={close}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Settings</DrawerHeader>

        <DrawerBody>
          <Stack spacing={6}>
            <Box>
              <FormLabel htmlFor="width">Width</FormLabel>
              <NumberInput
                id="width"
                defaultValue={options.width}
                min={1}
                onChange={(_value, value) => setOptions({ ...options, width: value })}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </Box>
            <Box>
              <FormLabel htmlFor="height">Height</FormLabel>
              <NumberInput
                id="height"
                defaultValue={options.height}
                min={1}
                onChange={(_value, value) => setOptions({ ...options, height: value })}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </Box>
            <Box>
              <FormLabel htmlFor="stepX">Step X</FormLabel>
              <NumberInput
                id="stepX"
                defaultValue={options.stepX}
                onChange={(_value, value) => setOptions({ ...options, stepX: value })}
              >
                <NumberInputField />
              </NumberInput>
            </Box>
            <Box>
              <FormLabel htmlFor="stepX">Step Y</FormLabel>
              <NumberInput
                id="stepY"
                defaultValue={options.stepY}
                onChange={(_value, value) => setOptions({ ...options, stepY: value })}
              >
                <NumberInputField />
              </NumberInput>
            </Box>
            <Box>
              <FormLabel htmlFor="cellWidth">Cell Width</FormLabel>
              <NumberInput
                id="cellWidth"
                defaultValue={options.cellWidth}
                min={1}
                onChange={(_value, value) => setOptions({ ...options, cellWidth: value })}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </Box>
            <Box>
              <FormLabel htmlFor="cellHeight">Cell Height</FormLabel>
              <NumberInput
                id="cellHeight"
                defaultValue={options.cellHeight}
                min={1}
                onChange={(_value, value) => setOptions({ ...options, cellHeight: value })}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </Box>
          </Stack>
        </DrawerBody>

        <DrawerFooter>
          <Button variant="outline" mr={3} onClick={close}>
            Cancel
          </Button>
          <Button
            colorScheme="blue"
            onClick={() => {
              applyOptions(options)
              onClose()
            }}
          >
            Apply
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

export default SettingsDrawer
