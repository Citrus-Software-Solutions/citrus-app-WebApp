import { ConsultOfferUseCase } from '@/job/application/use-cases/in/ConsultOfferUseCase'
import { ConsultOfferPort } from '@/job/application/use-cases/out/ConsultOfferPort'
import { ConsultOfferDTOUi } from '@/job/domain/DTO/ConsultOfferDto'
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

  public async execute(offerId: ConsultOfferDTOUi): Promise<void> {
    let id
    this.updateStatusPort.inProgress()

    try {
      id = new Id(offerId)
    } catch (error) {
      this.updateStatusPort.error(error.message)
      return
    }

    this.updateStatePort.setState({})
    const response = await this.consultOfferPort.requestHandler(id)

    if (response.success) {
      this.updateStatePort.setState(response.body)
      this.updateStatusPort.idle()
    } else {
      this.updateStatusPort.error()
    }
  }
}
