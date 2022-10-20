import { ComponentStory, ComponentMeta } from '@storybook/react'
import FormHelperText from '@mui/material/FormHelperText'
import { TextField } from './TextField'
import { Stack, Typography } from '@mui/material'
import { Box } from '@web3chief/ui/Box'
import { PlusIcon } from '@web3chief/ui/Icon/PlusIcon'

export default {
  title: '@web3chief/ui/TextField',
  component: TextField,
  argTypes: { onClick: { action: 'onClick' } },
} as ComponentMeta<typeof TextField>

const Template: ComponentStory<typeof TextField> = args => (
  <Box pb={4}>
    <Stack direction='row' spacing={2} mb={4}>
      <Box>
        <Typography sx={{ mb: 3 }} variant='h4' color='text.secondary'>
          Size small
        </Typography>
        <FormHelperText>Label</FormHelperText>
        <TextField {...args} />
      </Box>
      <Box>
        <Typography sx={{ mb: 3 }} variant='h4' color='text.secondary'>
          Disabled
        </Typography>
        <FormHelperText>Label</FormHelperText>
        <TextField disabled {...args} />
      </Box>
      <Box>
        <Typography sx={{ mb: 3 }} variant='h4' color='text.secondary'>
          Error
        </Typography>
        <FormHelperText>Label</FormHelperText>
        <TextField error={true} helperText='Error message' {...args} />
      </Box>
    </Stack>
    <Stack direction='row' spacing={2} mb={4}>
      <Box>
        <Typography sx={{ mb: 3 }} variant='h4' color='text.secondary'>
          Size big
        </Typography>
        <FormHelperText>Label</FormHelperText>
        <TextField size='big' {...args} />
      </Box>
      <Box>
        <Typography sx={{ mb: 3 }} variant='h4' color='text.secondary'>
          Align center
        </Typography>
        <FormHelperText>Label</FormHelperText>
        <TextField textalign='center' {...args} />
      </Box>
      <Box>
        <Typography sx={{ mb: 3 }} variant='h4' color='text.secondary'>
          Align right
        </Typography>
        <FormHelperText>Label</FormHelperText>
        <TextField textalign='right' {...args} />
      </Box>
    </Stack>

    <Stack mb={4}>
      <Box>
        <Typography sx={{ mb: 3 }} variant='h4' color='text.secondary'>
          HelperText
        </Typography>
        <FormHelperText>Label</FormHelperText>
        <TextField {...args} helperText='Helper text example' />
      </Box>
    </Stack>

    <Stack direction='row' spacing={2} mb={4} color='text.secondary'>
      <Box width='100%'>
        <Typography sx={{ mb: 3 }} variant='h4'>
          Full width
        </Typography>
        <FormHelperText>Label</FormHelperText>
        <TextField fullWidth {...args} />
      </Box>
    </Stack>
    <Stack direction='row' spacing={2} mb={4} color='text.secondary'>
      <Box>
        <Typography sx={{ mb: 3 }} variant='h4'>
          Password
        </Typography>
        <FormHelperText>Password</FormHelperText>
        <TextField type='password' {...args} />
      </Box>
      <Box>
        <Typography sx={{ mb: 3 }} variant='h4' color='text.secondary'>
          Search
        </Typography>
        <FormHelperText>Label</FormHelperText>
        <TextField type='search' {...args} />
      </Box>
      <Box>
        <Typography sx={{ mb: 3 }} variant='h4' color='text.secondary'>
          Read only
        </Typography>
        <FormHelperText>Read Only</FormHelperText>
        <TextField
          InputProps={{
            readOnly: true,
          }}
          {...args}
        />
      </Box>
    </Stack>
    <Stack direction='row' spacing={2} mb={4}>
      <Box mb={4}>
        <Typography sx={{ mb: 3 }} variant='h4' color='text.secondary'>
          Multiline max rows
        </Typography>
        <FormHelperText>Multiline</FormHelperText>
        <TextField
          multiline
          maxRows={4}
          {...args}
          defaultValue='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        />
      </Box>
      <Box>
        <Typography sx={{ mb: 3 }} variant='h4' color='text.secondary'>
          Multiline fix rows
        </Typography>
        <FormHelperText>Multiline</FormHelperText>
        <TextField multiline rows={3} {...args} />
      </Box>
    </Stack>
    <Stack direction='row' spacing={2} mb={4}>
      <Box>
        <Typography sx={{ mb: 3 }} variant='h4' color='text.secondary'>
          Label with icon
        </Typography>
        <FormHelperText>
          Label <PlusIcon fontSize='small' />
        </FormHelperText>
        <TextField {...args} />
      </Box>
    </Stack>
  </Box>
)

export const TextFieldStandard = Template.bind({})
TextFieldStandard.args = {
  variant: 'standard',
  defaultValue: 'Value',
}
export const TextFieldOutlined = Template.bind({})
TextFieldOutlined.args = {
  variant: 'outlined',
  defaultValue: 'Value',
}
export const TextFieldFilled = Template.bind({})
TextFieldFilled.args = {
  variant: 'filled',
  defaultValue: 'Value',
}
export const TextFieldFilledCounter = Template.bind({})
TextFieldFilledCounter.args = {
  variant: 'filledCounter',
  defaultValue: 'Value',
}
