import React, { FC } from 'react'
import {
  Box,
  FormLabel,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper
} from '@chakra-ui/react'

export type SettingNumberInputProps = {
  id: string
  label: string
  value: number
  min: number
  onChange: (value: number) => void
  hasStepper?: boolean // eslint-disable-line react/require-default-props
}

const SettingNumberInput: FC<SettingNumberInputProps> = ({ id, label, value, min, onChange, hasStepper }) => {
  return (
    <Box>
      <FormLabel htmlFor={id}>{label}</FormLabel>
      <NumberInput id={id} value={value} min={min} onChange={(_after, after) => onChange(after)}>
        <NumberInputField />
        {hasStepper && (
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        )}
      </NumberInput>
    </Box>
  )
}

export default SettingNumberInput
