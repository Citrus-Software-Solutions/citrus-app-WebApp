import { ConsultOfferUseCase } from '@/job/application/use-cases/in/ConsultOfferUseCase'
import { ConsultOfferPort } from '@/job/application/use-cases/out/ConsultOfferPort'
import { Id } from '@/job/domain/value-objects/Identifier'
import { UpdateStatePort } from '@/shared/application/use-cases/out/UpdateStatePort'
import { UpdateStatusPort } from '@/shared/application/use-cases/out/UpdateStatusPort'

export class ConsultOfferService implements ConsultOfferUseCase {
  private consultOfferPort: ConsultOfferPort
  private updateStatePort: UpdateStatePort<any>
  private updateStatusPort: UpdateStatusPort

  constructor(
    consultOfferPort: ConsultOfferPort,
    updateStatePort: UpdateStatePort<any>,
    updateStatusPort: UpdateStatusPort
  ) {
    this.consultOfferPort = consultOfferPort
    this.updateStatePort = updateStatePort
    this.updateStatusPort = updateStatusPort
  }

  public async execute(employerId: Id): Promise<void> {
    this.updateStatusPort.inProgress()
    const response = await this.consultOfferPort.requestHandler(employerId)

    if (response.success) {
      this.updateStatePort.setState(response.body)
      this.updateStatusPort.idle()
    } else {
      this.updateStatusPort.error()
    }
  }
}
