import { QueryArg } from '@web3chief/sdk/sagas'
import { GetAllShopsResponseDto } from '@web3chief/sdk/types'

export type GetAvatarsVariables = {
  tags?: string[]
  active?: GetAllShopsResponseDto['status']
}

export async function getAvatarsQuery({
  ctx: { axios },
  variables: { active, tags },
}: QueryArg<GetAvatarsVariables>) {
  const { data } = await axios.apiShops.apiShopsControllerGetAllShops({
    active,
    tags,
  })

  return data
}
