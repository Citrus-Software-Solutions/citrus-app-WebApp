import { LoginUseCase } from '../use-cases/LoginUseCase'
import { LoginPort } from '../ports/LoginPort'
import { LoginStateAdaptare } from '@/Employer/infraestructure/adapters/out/LoginStateAdapter'
import { LoginStatusAdapter } from '@/Employer/infraestructure/adapters/out/LoginStatusAdapter'
import { store } from '@/common-infrastructure/store'

export class LoginService implements LoginUseCase {
  port: LoginPort
  statePort: LoginStateAdaptare
  statusPort: LoginStatusAdapter
  constructor(
    loginPort: LoginPort,
    state: LoginStateAdaptare,
    status: LoginStatusAdapter
  ) {
    this.port = loginPort
    ;(this.statePort = state), (this.statusPort = status)
  }

  async execute(payload: {
    username: string
    password: string
  }): Promise<void> {
    this.statusPort.inProgress()
    //hacer el set del usuario en el store
    const auth_response = await this.port.requestHandler(payload)
    const id = auth_response.body.id
    const request_employer_res = await this.port.requestEmployer(id)
    const request_user_res = await this.port.requestUser(id)
    const statePayLoad = {
      employer: request_employer_res.body,
      user: {
        uid: request_user_res.body.id,
        id: 1, //employer id
        username: request_user_res.body.username,
        email: request_user_res.body.email,
        status: request_user_res.body.status,
      },
    }
    this.statePort.setState(statePayLoad)
    if (
      auth_response.success &&
      request_employer_res.success &&
      request_user_res.success
    ) {
      this.statusPort.success()
    } else this.statusPort.error()
  }
}
