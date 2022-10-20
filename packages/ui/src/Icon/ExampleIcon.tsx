import { FC } from 'react'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'

export const ExampleIcon: FC<SvgIconProps> = props => (
  <SvgIcon fontSize='inherit' viewBox='0 0 24 24' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M22 12.001C22 17.5238 17.5228 22.001 12 22.001C6.47715 22.001 2 17.5238 2 12.001C2 6.47813 6.47715 2.00098 12 2.00098C17.5228 2.00098 22 6.47813 22 12.001ZM24 12.001C24 18.6284 18.6274 24.001 12 24.001C5.37258 24.001 0 18.6284 0 12.001C0 5.37356 5.37258 0.000976562 12 0.000976562C18.6274 0.000976562 24 5.37356 24 12.001ZM17.841 13.9909L18.0246 13.7258L18.0935 13.6335H8.63771L9.03937 13.0687L10.4164 11.1437L11.2197 10.0024C11.4033 9.73346 11.6557 9.59895 11.9771 9.59895C12.2831 9.59895 12.5317 9.72192 12.7229 9.96787L13.6066 11.1437L14.9951 13.0687L15.2246 13.403H17.5082L16.5099 11.9852L15.3623 10.3713L15.2017 10.1523C14.5437 9.21472 14.1268 8.63451 13.9508 8.41164C13.4765 7.80453 12.8339 7.50098 12.0229 7.50098C11.2733 7.50098 10.6344 7.793 10.1066 8.37706C10.0683 8.42317 10.0301 8.47312 9.99184 8.52691L7.51312 11.9852L5.67705 14.5673L5 15.501H16.7508L16.8426 15.3626L17.841 13.9909ZM19 15.501L18.0246 14.1177L17.0377 15.501H19Z'
      fill='#F0CD89'
    />
  </SvgIcon>
)
