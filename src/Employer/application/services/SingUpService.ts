import { SingUpUseCase } from '../use-cases/SingUpUseCase'
import { SingUpPort } from '../ports/SingUpPort'
import { SingUpPersistence } from '../../domain/DTO/SingUpDTO'
import { UpdateStatePort } from '@/shared/application/use-cases/out/UpdateStatePort'
import { UpdateStatusPort } from '@/shared/application/use-cases/out/UpdateStatusPort'
export class SingUpService implements SingUpUseCase {
  private port: SingUpPort

  private statusport: UpdateStatusPort

  constructor(port: SingUpPort, status: UpdateStatusPort) {
    this.port = port
    this.statusport = status
  }

  public async singUp(singUpBody: SingUpPersistence) {
    this.statusport.inProgress()
    const response = await this.port.requestHandler(singUpBody)
    if (response.success) {
      this.statusport.success()
    } else {
      this.statusport.error()
    }
  }
}
