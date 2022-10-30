import { Typography } from '@mui/material'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Box } from '../Box'
import { Button } from '../Button'
import { Banner } from './Banner'

export default {
  title: 'Banner',
  component: Banner,
} as ComponentMeta<typeof Banner>

const Template: ComponentStory<typeof Banner> = () => (
  <Banner
    height={{ xs: 430, sm: 400, md: 460 }}
    background={{
      xs: 'url(posters/poster_main_360.png) no-repeat center center/auto 100%',
      sm: 'url(posters/poster_main_480.png) no-repeat center top/cover',
      md: 'url(posters/poster_main_768.png) no-repeat center center/auto 100%',
      lg: 'url(posters/poster_main_1024.png) no-repeat center center/auto 100%',
      xl: 'radial-gradient(46.76% 100% at 50% 0%, rgba(25, 17, 25, 0) 0%, rgba(25, 17, 25, 0.2) 50.36%, #191119 100%),url(posters/poster_main_1920.png) no-repeat center center/auto 100%',
    }}
  >
    <Box sx={{ mb: { xs: 1, sm: 1.5 } }}>
      <Typography variant='h1' align='center'>
        METABASE JOINS ZEUS FOR THEIR PRIVATE IGO
      </Typography>
    </Box>
    <Box sx={{ mb: { xs: 3, sm: 4 } }}>
      <Typography align='center' variant='subtitle1alt'>
        Pick your faction, recruit your army and make your claim to the universe.
      </Typography>
    </Box>
    <Box sx={{ maxWidth: { xs: 163, sm: 206 } }}>
      <Button size='large' variant='contained'>
        Play Now
      </Button>
    </Box>
  </Banner>
)

export const BannerBlock = Template.bind({})
