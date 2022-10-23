import React, { FC } from 'react'
import Typography from '@mui/material/Typography'
import { Box, BoxProps } from '../Box'
import { ArrowRightIcon } from '../Icon/ArrowRightIcon'
import { Grid } from '../Grid'
import { NewsBanner, NewsBannerProps } from '../News/NewsBanner'
/* import Link from 'next/link'
import { MEDIUM_URL } from '../config/urls' */
import { Button } from '../Button'
import { useTranslation } from 'next-i18next'

export type NewsProps = {
  newsArray: NewsBannerProps[]
  texts?: {
    showMore?: string
    latestNews?: string
  }
}

export const News: FC<NewsProps> = ({ newsArray, texts }) => {
  const { t } = useTranslation('common')
  const { showMore, latestNews } = texts || {}

  const BtnShowMore = (props: BoxProps) => (
    /*  <Link href={MEDIUM_URL} passHref>
      <a target='_blank'> */
    <Box {...props} mt={{ xs: 2, md: 0 }}>
      <Button color='primary' endIcon={<ArrowRightIcon />}>
        {showMore || t('Show more')}
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
        <Typography variant='h3'>{latestNews || t('Latest News')}</Typography>
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
