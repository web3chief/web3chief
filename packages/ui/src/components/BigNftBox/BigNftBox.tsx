import React from 'react'
import { Box } from '../Box'
import { ImageFallback } from '../Image'
import defaultItem from './default-item.svg'

export interface BigNftBoxProps {
  image: string
  background?: string
  soldOut?: boolean
}
const BigNftBox: React.FC<BigNftBoxProps> = ({ image, soldOut }) => (
  <Box
    opacity={soldOut ? 0.5 : 1}
    position='relative'
    width='100%'
    height='100%'
    border='1px solid'
    borderColor='alpha.10'
    bgcolor='alpha.4'
    borderRadius='16px'
  >
    <Box
      position='relative'
      alignItems='center'
      justifyContent='center'
      overflow='hidden'
      padding='44px'
      width='100%'
      height='100%'
    >
      <Box zIndex={1} position='relative' width='100%' height='100%'>
        <ImageFallback alt='' src={image} fallbackImage={defaultItem} layout='fill' />
      </Box>
    </Box>
  </Box>
)

export default BigNftBox
