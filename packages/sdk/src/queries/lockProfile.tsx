import { ErrorCode } from '@web3chief/sdk/config/error'
import { QueryArg } from '@web3chief/sdk/sagas'

export async function lockProfileQuery({
  variables: { profileID },
  ctx: {
    account,
    contracts: { gameFiCore },
  },
}: QueryArg<{ profileID: string | number }>) {
  if (!account) throw new ErrorCode(ErrorCode.CODE_ERROR.login.noAccount)

  await gameFiCore.methods.lockProfile(profileID).call({ from: account })

  return gameFiCore.methods.lockProfile(profileID).send({ from: account })
}
