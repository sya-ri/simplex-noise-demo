import React, { FC } from 'react'
import { Box, Flex, Tooltip } from '@chakra-ui/react'
import SimplexNoise from 'simplex-noise'

export type NoisePreviewProps = {
  width: number
  height: number
  stepX: number
  stepY: number
  cellWidth: number
  cellHeight: number
  simplex: SimplexNoise
}

const NoisePreview: FC<NoisePreviewProps> = ({ width, height, stepX, stepY, cellWidth, cellHeight, simplex }) => {
  return (
    <Box>
      {Array.from({ length: height }, (_y, y) => (
        <Flex key={y}>
          {Array.from({ length: width }, (_x, x) => {
            // Convert a value from -1 to 1 to 0 to 1.
            // After that, multiply 0 to 1 by 100 and convert to a percentage.
            const noise = simplex.noise2D(x * stepX, y * stepY)
            return (
              <Tooltip key={x} label={`(${x}, ${y}): ${noise}`} hasArrow placement="top">
                <Box w={cellWidth} h={cellHeight} bg={`hsl(0, 0%, ${(100 * (noise + 1)) / 2.0}%)`} />
              </Tooltip>
            )
          })}
        </Flex>
      ))}
    </Box>
  )
}

export default NoisePreview
