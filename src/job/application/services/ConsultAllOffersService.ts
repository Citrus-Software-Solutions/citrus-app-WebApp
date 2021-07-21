import { ConsultAllOffersUseCase } from '@/job/application/use-cases/in/ConsultAllOffersUseCase'
import { ConsultAllOffersPort } from '@/job/application/use-cases/out/ConsultAllOffersPort'
import { Id } from '@/job/domain/value-objects/Identifier'
import { UpdateStatePort } from '@/shared/application/use-cases/out/UpdateStatePort'
import { UpdateStatusPort } from '@/shared/application/use-cases/out/UpdateStatusPort'

export class ConsultAllOffersService implements ConsultAllOffersUseCase {
  private consultAllOffersPort: ConsultAllOffersPort
  private updateStatePort: UpdateStatePort<any>
  private updateStatusPort: UpdateStatusPort

  constructor(
    consultAllOffersPort: ConsultAllOffersPort,
    updateStatePort: UpdateStatePort<any>,
    updateStatusPort: UpdateStatusPort
  ) {
    this.consultAllOffersPort = consultAllOffersPort
    this.updateStatePort = updateStatePort
    this.updateStatusPort = updateStatusPort
  }

  public async execute(employerId: Id): Promise<void> {
    this.updateStatusPort.inProgress()
    const response = await this.consultAllOffersPort.requestHandler(employerId)

    if (response.success) {
      this.updateStatePort.setState(response.body)
      this.updateStatusPort.idle()
    } else {
      this.updateStatusPort.error()
    }
  }
}
