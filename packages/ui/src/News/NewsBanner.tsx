import { FC } from 'react'
import Typography from '@mui/material/Typography'
import { Box } from '@web3chief/ui/Box'
import { alpha, useTheme } from '@mui/material'

export type NewsBannerProps = {
  id: number
  date: string
  news: string
  img: string
}

export const NewsBanner: FC<NewsBannerProps> = ({ date, news, img }) => {
  const theme = useTheme()

  return (
    <Box
      sx={{
        backgroundPosition: '0px',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
      background={`linear-gradient(6.73deg,
      ${alpha(theme.palette.text.altPrimary, 1)} 0%,
      ${alpha(theme.palette.text.altPrimary, 0)} 61.5%), url(${img}), ${theme.palette.alpha['10']}`}
      overflow='hidden'
      height={{ xs: '220px', sm: '280px', md: '376px', lg: '300px' }}
      flexDirection='column'
      justifyContent='end'
      p={3}
    >
      <Typography variant='subtitle2' color={theme.palette.alpha[60]}>
        {date}
      </Typography>
      <Typography variant='h5' mt={1}>
        {news}
      </Typography>
    </Box>
  )
}
