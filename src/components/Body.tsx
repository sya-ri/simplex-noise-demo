import React, { FC } from 'react'
import { Center } from '@chakra-ui/react'
import SimplexNoise from 'simplex-noise'
import NoisePreview from './NoisePreview'

const Body: FC = () => {
  const simplex = new SimplexNoise()
  return (
    <Center mx={2} my={4}>
      <NoisePreview width={60} height={30} stepX={1} stepY={1} cellWidth={4} cellHeight={4} simplex={simplex} />
    </Center>
  )
}

export default Body
