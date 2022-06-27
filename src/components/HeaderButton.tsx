import React, { FC } from 'react'
import { Icon, IconButton, Tooltip } from '@chakra-ui/react'
import { IconType } from 'react-icons'

export type HeaderButtonProps = {
  label: string
  onClick: () => void
  iconType: IconType
}

const HeaderButton: FC<HeaderButtonProps> = ({ label, onClick, iconType }) => {
  return (
    <Tooltip label={label}>
      <IconButton aria-label={label} colorScheme="teal" color="gray.800" rounded="full" onClick={onClick}>
        <Icon as={iconType} w={6} h={6} />
      </IconButton>
    </Tooltip>
  )
}

export default HeaderButton
