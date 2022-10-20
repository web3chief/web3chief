import * as React from 'react'
import { FC } from 'react'
import { Grid } from '@mui/material'

export const InventoryContainer: FC = props => {
  const { children } = props

  return (
    <Grid item xs={4} sm={4} md={6} lg={3} xl={4}>
      <Grid
        container
        columns={{
          xs: 4,
          sm: 4,
          md: 6,
          lg: 3,
          xl: 4,
          xxl: 4,
        }}
      >
        {children}
      </Grid>
    </Grid>
  )
}
