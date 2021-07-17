import { DeleteOfferUseCase } from '@/job/application/use-cases/in/DeleteOfferUseCase'
import { DeleteOfferPort } from '@/job/application/use-cases/out/DeleteOfferPort'
import { Id } from '@/job/domain/value-objects/Identifier'
import { UpdateStatusPort } from '@/shared/application/use-cases/out/UpdateStatusPort'

export class DeleteOfferService implements DeleteOfferUseCase {
  private deleteOfferPort: DeleteOfferPort
  private updateStatusPort: UpdateStatusPort

  constructor(
    deleteOfferPort: DeleteOfferPort,
    updateStatusPort: UpdateStatusPort
  ) {
    this.deleteOfferPort = deleteOfferPort
    this.updateStatusPort = updateStatusPort
  }

  public async execute(offerId: Id): Promise<void> {
    this.updateStatusPort.inProgress()
    const response = await this.deleteOfferPort.requestHandler(offerId)

    if (response.success) {
      this.updateStatusPort.success()
    } else {
      this.updateStatusPort.error()
    }
  }
}
