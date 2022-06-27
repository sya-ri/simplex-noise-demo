import { atom } from 'recoil'
import SimplexNoise from 'simplex-noise'
import { NoisePreviewProps } from './components/NoisePreview'

// eslint-disable-next-line import/prefer-default-export
export const previewOptions = atom<NoisePreviewProps>({
  key: 'previewOptions',
  default: {
    width: 60,
    height: 30,
    stepX: 0.1,
    stepY: 0.1,
    cellWidth: 4,
    cellHeight: 4,
    simplex: new SimplexNoise()
  }
})
