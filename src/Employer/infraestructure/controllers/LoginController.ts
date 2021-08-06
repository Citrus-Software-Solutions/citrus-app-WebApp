import { LoginUseCase } from '@/Employer/application/use-cases/LoginUseCase'

export class LoginController {
  private loginUseCase: LoginUseCase

  constructor(loginUseCase: LoginUseCase) {
    this.loginUseCase = loginUseCase
  }

  public executeImpl(payload: { username: string; password: string }) {
    this.loginUseCase.execute(payload)
  }
}
