import { ThemeProvider } from '@mui/material/styles'
import { darkTheme } from '../src/@web3chief/ui/config/theme'
import '../src/@web3chief/ui/config/yup'
import '../src/@web3chief/ui/config/directorr'
import { CssBaseline } from '@mui/material'
import * as NextImage from 'next/image'
import { CacheProvider } from '@emotion/react'
import { DirectorrProvider } from '@nimel/directorr-react'
import { withNextRouter } from '@gogaille/storybook-addon-next-router'
import { SnackbarProvider } from '..src/componets/Snackbar'
import { createEmotionCache } from '../src/utils/createEmotionCache'
import { Notification } from '../src/@web3chief/ui/Notification/Notification'
import {
  getAvatarsQuery,
  getProfilesQuery,
  getCurrentProfileIDQuery,
  getBoxesQuery,
  getInventoryWalletAssetsQuery,
  getInventoryProfileAssetsQuery,
  getMyCollectionsAssetsQuery,
  getMarketplaceOrdersQuery,
  getOrderQuery,
  getAssetQuery,
  getInoShopQuery,
  getInoShopsQuery,
  PROFILES_MOCK,
  BOXES_MOCK,
  INVENTORY_BY_PROFILE_MOCK,
  INVENTORY_BY_WALLET_MOCK,
  ITEM_LIST,
  TASB_FILTER_MY_COLLECTION,
  ORDER,
  NFT_INFO,
  AVATARS,
  INO_ITEM,
  INO_ITEMS,
  createBuilder,
  DEFAULT_OPTIONS,
  actionLoginSuccess,
  createCacheMiddleware,
  rootQuery,
  QueryCache,
} from '@web3chief/sdk'
// eslint-disable-next-line import/no-extraneous-dependencies
import { I18nextProvider } from 'react-i18next'
import i18n from './i18n'

const clientSideEmotionCache = createEmotionCache()

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

const OriginalNextImage = NextImage.default

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: props => (
    <OriginalNextImage
      {...props}
      unoptimized
      blurDataURL='data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAADAAQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAbEAADAAMBAQAAAAAAAAAAAAABAgMABAURUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAECEf/aAAwDAQACEQMRAD8Anz9voy1dCI2mectSE5ioFCqia+KCwJ8HzGMZPqJb1oPEf//Z'
    />
  ),
})

const queryCache = new QueryCache([], Number.MAX_SAFE_INTEGER)

queryCache.set([getAvatarsQuery.name, {}], AVATARS)
queryCache.set([getProfilesQuery.name, {}], PROFILES_MOCK)
queryCache.set([getCurrentProfileIDQuery.name, {}], '12')
queryCache.set([getBoxesQuery.name, {}], BOXES_MOCK)
queryCache.set([getInventoryWalletAssetsQuery.name, {}], INVENTORY_BY_WALLET_MOCK)
queryCache.set([getInventoryProfileAssetsQuery.name, {}], INVENTORY_BY_PROFILE_MOCK)
queryCache.set([getMyCollectionsAssetsQuery.name, { category: 'all' }], ITEM_LIST)
queryCache.set(
  [getMarketplaceOrdersQuery.name, { address: '0x0000000000000000000000000000000000000001' }],
  ITEM_LIST,
)
queryCache.set([getOrderQuery.name, {}], ORDER)
queryCache.set([getAssetQuery.name, {}], NFT_INFO)
queryCache.set([getInoShopQuery.name, {}], INO_ITEM)
queryCache.set([getInoShopsQuery.name, {}], INO_ITEMS)

const cacheMiddleware = createCacheMiddleware(queryCache)

const { directorr } = createBuilder({
  middlewares: [...DEFAULT_OPTIONS.middlewares, cacheMiddleware],
  rootSaga: rootQuery,
})

directorr.dispatchType(actionLoginSuccess.type)

const withThemeProvider = (Story, context) => (
  <DirectorrProvider value={directorr}>
    <CacheProvider value={clientSideEmotionCache}>
      <ThemeProvider theme={darkTheme}>
        <SnackbarProvider>
          <CssBaseline />
          <Story {...context} />
          <Notification />
        </SnackbarProvider>
      </ThemeProvider>
    </CacheProvider>
  </DirectorrProvider>
)

const withi8nProvider = (Story, context) => (
  <I18nextProvider i18n={i18n}>
    <Story {...context} />
  </I18nextProvider>
)

export const decorators = [withNextRouter, withThemeProvider, withi8nProvider]
