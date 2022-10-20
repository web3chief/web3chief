import { DataQueryStore, EMPTY_INITVARIABLES, useQuery } from './useQuery'
import { QueryArg, delay } from '@web3chief/sdk/sagas'
import { FC } from 'react'
import { observer } from 'mobx-react-lite'
import { Story } from '@storybook/react/types-6-0'

export default {
  title: 'components/query',
}

async function someQuery({ variables: { id = 0 } }: QueryArg<{ id: number }>) {
  await delay(3000)

  return [id]
}

async function someQueryEmptyVariables() {
  await delay(3000)

  return [3000]
}

async function someQueryError({ variables: { id = 0 } }: QueryArg<{ id: number }>) {
  await delay(3000)

  throw new Error(`${id}`)
}

async function someQueryUseAnotherQuery({ variables: { id = 0 }, ctx }: QueryArg<{ id: number }>) {
  await delay(3000)

  return someQuery({ ctx, variables: { id } })
}

const Info: FC<Omit<DataQueryStore, 'getQuery' | 'reQuery' | 'getFullQuery'>> = ({
  data,
  isLoading,
  isSuccess,
  isError,
  error,
}) => (
  <>
    <h4>{`data: ${data}`}</h4>
    <h4>{`isLoading: ${isLoading}`}</h4>
    <h4>{`isSuccess: ${isSuccess}`}</h4>
    <h4>{`isError: ${isError}`}</h4>
    <h4>{`error: ${error}`}</h4>
  </>
)

let count = 0

const Query: Story = observer(() => {
  const { getQuery, ...rest } = useQuery(someQuery)

  return (
    <>
      <Info {...rest} />
      <button onClick={() => getQuery({ id: count++ })}>run query</button>
    </>
  )
})

const QueryEmptyVariables: Story = observer(() => {
  const { getQuery, ...rest } = useQuery(someQueryEmptyVariables)

  return <Info {...rest} />
})

const template = () => <Query />

export const query = template.bind({})

const QueryInit: Story = observer(() => {
  const result = useQuery(someQuery, { initVariables: { id: 1 } })

  return <Info {...result} />
})

const templateInit = () => <QueryInit />

export const queryInit = templateInit.bind({})

const QueryUseAnotherQuery: Story = observer(() => {
  const result = useQuery(someQueryUseAnotherQuery, { initVariables: { id: 1 } })

  return <Info {...result} />
})

const templateUseAnotherQuery = () => <QueryUseAnotherQuery />

export const queryUseAnotherQuery = templateUseAnotherQuery.bind({})

const QueryError: Story = observer(() => {
  const { getQuery, ...rest } = useQuery(someQueryError)

  return (
    <>
      <Info {...rest} />
      <button onClick={() => getQuery({ id: count++ })}>run query</button>
    </>
  )
})

const templateError = () => <QueryError />

export const queryError = templateError.bind({})

const QueryPolling: Story = observer(() => {
  const { getQuery, ...rest } = useQuery(someQuery, {
    initVariables: { id: 0 },
    pollingInterval: 1000,
  })

  return <Info {...rest} />
})

const templatePolling = () => <QueryPolling />

export const queryPolling = templatePolling.bind({})

const QueryInner: Story = observer(() => {
  const { getQuery } = useQuery(someQuery)

  return (
    <>
      <QueryInit />
      <button onClick={() => getQuery({ id: 1 })}>run query</button>
    </>
  )
})

const templateInner = () => <QueryInner />

export const queryInner = templateInner.bind({})

const QueryInnerEmptyVariables: Story = observer(() => {
  const { getQuery } = useQuery(someQueryEmptyVariables)

  return (
    <>
      <QueryEmptyVariables />
      <button onClick={() => getQuery(EMPTY_INITVARIABLES.initVariables)}>run query</button>
    </>
  )
})

const templateInnerEmptyVariables = () => <QueryInnerEmptyVariables />

export const queryInnerEmptyVariables = templateInnerEmptyVariables.bind({})

const QueryInnerAnyVariables: Story = observer(() => {
  const { isLoading } = useQuery(someQuery, { ignoreVariables: true })

  return (
    <>
      <h4 style={{ color: 'green' }}>{`outer isLoading: ${isLoading}`}</h4>
      <Query />
    </>
  )
})

const templateInnerAnyVariables = () => <QueryInnerAnyVariables />

export const queryInnerAnyVariables = templateInnerAnyVariables.bind({})
