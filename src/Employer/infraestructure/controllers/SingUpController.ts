import { SingUpPersistence } from '@/Employer/domain/DTO/SingUpDTO'
import { SingUpUseCase } from '@/Employer/application/use-cases/SingUpUseCase'
import { SingUpMapper } from '@/Employer/domain/mappers/SingUpMapper'

export class SingUpController {
  private usecase: SingUpUseCase

  constructor(singupUseCase: SingUpUseCase) {
    this.usecase = singupUseCase
  }

  public executeimpl(body: SingUpPersistence) {
    this.usecase.singUp(SingUpMapper.ToPersistence(body as any))
  }
}
