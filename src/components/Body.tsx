import React, { FC } from 'react'
import { Center } from '@chakra-ui/react'
import { useRecoilValue } from 'recoil'
import NoisePreview from './NoisePreview'
import * as states from '../states'

const Body: FC = () => {
  const props = useRecoilValue(states.previewOptions)
  return (
    <Center mx={2} my={4} overflow="auto">
      <NoisePreview {...props /* eslint-disable-line react/jsx-props-no-spreading */} />
    </Center>
  )
}

export default Body
