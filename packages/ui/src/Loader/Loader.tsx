import { useTheme, keyframes } from '@mui/material'
import { Box } from '@web3chief/ui/Box'

const loaderAnim = keyframes`
     0%{transform:rotate(0deg);}
     100%{transform:rotate(360deg);}
`

export const Loader = () => {
  const theme = useTheme()

  return (
    <Box
      key='loader'
      sx={{
        position: 'relative',
        width: '5px !important',
        height: '5px !important',
        top: 'calc(50% - 2.5px)',
        left: 'calc(50% - 2.5px)',
        backgroundColor: theme.palette.text.primary,
        border: 'none',
        borderRadius: '50px',
        '& svg': {
          display: 'none',
        },
        '&:before': {
          content: "''",
          position: 'absolute',
          top: '-38px',
          left: '3px',
          borderTop: `3px solid ${theme.palette.text.primary}`,
          borderRight: `3px solid ${theme.palette.text.primary}`,
          borderRadius: '0 50px 0px  0',
          width: '40px',
          height: '40px',
          backgroundColor: theme.palette.alpha['10'],
          transformOrigin: '0% 100%',
          animation: `${loaderAnim} 1.5s linear infinite`,
        },
        '&:after': {
          content: "''",
          position: 'absolute',
          top: '2px',
          right: '2px',
          borderBottom: `3px solid ${theme.palette.text.primary}`,
          borderLeft: `3px solid ${theme.palette.text.primary}`,
          borderRadius: '0 0px 0px  50px',
          width: '40px',
          height: '40px',
          backgroundColor: theme.palette.alpha['10'],
          transformOrigin: '100% 0%',
          animation: `${loaderAnim} 1.5s linear infinite`,
        },
      }}
    />
  )
}
