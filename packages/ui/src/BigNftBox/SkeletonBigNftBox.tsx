import React from 'react'
import { Box } from '@web3chief/ui/Box'
import { Skeleton } from '@web3chief/ui/Skeleton'

const SkeletonBigNftBox: React.FC = () => (
  <Box
    position='relative'
    width='100%'
    border='1px solid'
    borderColor='alpha.10'
    borderRadius='16px'
  >
    <Box p={{ xs: '60px', sm: '74px' }}>
      <Box position='relative' width='100%' pb='100%'>
        <Box position='absolute' width='100%' height='100%' top={0} left={0}>
          <Skeleton width='100%' height='100%' />
        </Box>
      </Box>
    </Box>
  </Box>
)

export default SkeletonBigNftBox
