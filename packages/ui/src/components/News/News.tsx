import React, { FC } from 'react'
import Typography from '@mui/material/Typography'
import { Box, BoxProps } from '@web3chief/ui/Box'
import { ArrowRightIcon } from '@web3chief/ui/Icon/ArrowRightIcon'
import { Grid } from '@web3chief/ui/Grid'
import { NewsBanner, NewsBannerProps } from '@web3chief/ui/News/NewsBanner'
/* import Link from 'next/link'
import { MEDIUM_URL } from '@web3chief/ui/config/urls' */
import { Button } from '@web3chief/ui/Button'
import { useTranslation } from 'next-i18next'

export type NewsProps = {
  newsArray: NewsBannerProps[]
}

export const News: FC<NewsProps> = ({ newsArray }) => {
  const { t } = useTranslation('common')

  const BtnShowMore = (props: BoxProps) => (
    /*  <Link href={MEDIUM_URL} passHref>
      <a target='_blank'> */
    <Box {...props} mt={{ xs: 2, md: 0 }}>
      <Button color='primary' endIcon={<ArrowRightIcon />}>
        {t('Show more')}
      </Button>
    </Box>
    /* </a>
    </Link> */
  )

  return (
    <>
      <Box
        justifyContent='space-between'
        alignItems='center'
        flexDirection='row'
        mb={{ sm: 3, xs: 2 }}
      >
        <Typography variant='h3'>{t('Latest News')}</Typography>
        <BtnShowMore display={{ xs: 'none', md: 'flex' }} />
      </Box>
      <Grid
        container
        columns={{
          xs: 1,
          sm: 2,
        }}
        spacing={2}
      >
        {newsArray.map((newsItem, i) => (
          <Grid item key={newsItem.id} xs={i % 3 === 0 ? 2 : 1}>
            <NewsBanner {...newsItem} />
          </Grid>
        ))}
      </Grid>
      <BtnShowMore display={{ xs: 'flex', md: 'none' }} />
    </>
  )
}
