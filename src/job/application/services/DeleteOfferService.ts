import { DeleteOfferUseCase } from '@/job/application/use-cases/in/DeleteOfferUseCase'
import { DeleteOfferPort } from '@/job/application/use-cases/out/DeleteOfferPort'
import { Id } from '@/job/domain/value-objects/Identifier'
import { UpdateStatusPort } from '@/shared/application/use-cases/out/UpdateStatusPort'
import { UpdateStatePort } from '@/shared/application/use-cases/out/UpdateStatePort'

export class DeleteOfferService implements DeleteOfferUseCase {
  private deleteOfferPort: DeleteOfferPort
  private updateStatusPort: UpdateStatusPort
  private updateStatePort: UpdateStatePort<any>

  constructor(
    deleteOfferPort: DeleteOfferPort,
    updateStatusPort: UpdateStatusPort,
    updateStatePort: UpdateStatePort<any>
  ) {
    this.deleteOfferPort = deleteOfferPort
    this.updateStatusPort = updateStatusPort
    this.updateStatePort = updateStatePort
  }

  public async execute(offerId: Id): Promise<void> {
    this.updateStatusPort.inProgress()
    const response = await this.deleteOfferPort.requestHandler(offerId)

    if (response.success) {
      this.updateStatePort.setState(offerId)
      this.updateStatusPort.success()
    } else {
      this.updateStatusPort.error()
    }
  }
}
