import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const Banner = ({
  title,
  description,
  image,
  height,
}: {
  title: string
  description: string
  image: {
    xs: string
    sm: string
    md: string
    lg: string
    xl: string
  }
  height: {
    xs: number
    sm: number
    md: number
    lg: number
    xl: number
  }
}) => (
  <Box
    alignItems='center'
    sx={{
      position: 'relative',
      width: '100%',
      maxWidth: 1920,
      height: height,
      backgroundImage: image,
      backgroundPosition: '0px',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
    }}
  >
    <Box alignItems='center' sx={{ paddingTop: { xs: '100px' } }}>
      <Box sx={{ mb: { xs: 1, sm: 1.5 } }}>
        <Typography variant='h2' align='center'>
          {title}
        </Typography>
      </Box>
      <Box sx={{ mb: { xs: 3, sm: 4 } }}>
        <Typography
          sx={{
            fontSize: '16px',
            fontFamily: "'JetBrains Mono'",
          }}
          align='center'
          variant='subtitle2'
          color='text.secondary'
        >
          {description}
        </Typography>
      </Box>
    </Box>
  </Box>
)

export default Banner
