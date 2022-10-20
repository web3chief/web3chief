import { ErrorCode } from '@web3chief/sdk/config/error'
import { QueryArg } from '@web3chief/sdk/sagas'

export async function unlockProfileQuery({
  variables: { profileID },
  ctx: {
    account,
    contracts: { gameFiCore },
  },
}: QueryArg<{ profileID: string | number }>): Promise<any> {
  if (!account) throw new ErrorCode(ErrorCode.CODE_ERROR.login.noAccount)

  await gameFiCore.methods.unlockProfile(profileID).call({ from: account })

  return gameFiCore.methods.unlockProfile(profileID).send({ from: account })
}
