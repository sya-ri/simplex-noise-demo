import React, { FC, useState } from 'react'
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Stack
} from '@chakra-ui/react'
import { useRecoilState } from 'recoil'
import * as states from '../states'
import SettingNumberInput from './SettingNumberInput'

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
            <SettingNumberInput
              id="width"
              label="Width"
              value={options.width}
              min={1}
              onChange={(value) => setOptions({ ...options, width: value })}
              hasStepper
            />
            <SettingNumberInput
              id="height"
              label="Height"
              value={options.height}
              min={1}
              onChange={(value) => setOptions({ ...options, height: value })}
              hasStepper
            />
            <SettingNumberInput
              id="stepX"
              label="Step X"
              value={options.stepX}
              min={0}
              onChange={(value) => setOptions({ ...options, stepX: value })}
            />
            <SettingNumberInput
              id="stepY"
              label="Step Y"
              value={options.stepY}
              min={0}
              onChange={(value) => setOptions({ ...options, stepY: value })}
            />
            <SettingNumberInput
              id="cellWidth"
              label="Cell Width"
              value={options.cellWidth}
              min={1}
              onChange={(value) => setOptions({ ...options, cellWidth: value })}
              hasStepper
            />
            <SettingNumberInput
              id="cellHeight"
              label="Cell Height"
              value={options.cellHeight}
              min={1}
              onChange={(value) => setOptions({ ...options, cellHeight: value })}
              hasStepper
            />
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
