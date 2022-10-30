import { ThemeProvider } from '@mui/material/styles'
import { darkTheme } from '../src/config/theme'
import { CssBaseline } from '@mui/material'
import { SnackbarProvider } from '../src/components/Snackbar'

const viewports = Object.entries(darkTheme.breakpoints.values).map(([name, size]) => ({
  name,
  styles: {
    width: `${size || 360}px`,
    height: '100%',
  },
}))

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    viewports,
  },
}


const withThemeProvider = (Story, context) => (
        <ThemeProvider theme={darkTheme}>
          <SnackbarProvider>
            <CssBaseline />
            <Story {...context} />
          </SnackbarProvider>
        </ThemeProvider>
)


export const decorators = [withThemeProvider]
