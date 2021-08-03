import { DeleteOfferUseCase } from '@/job/application/use-cases/in/DeleteOfferUseCase'
import { DeleteOfferPort } from '@/job/application/use-cases/out/DeleteOfferPort'
import { Id } from '@/job/domain/value-objects/Identifier'
import { UpdateStatusPort } from '@/shared/application/use-cases/out/UpdateStatusPort'
import { UpdateStatePort } from '@/shared/application/use-cases/out/UpdateStatePort'
import { ConsultOfferPort } from '../use-cases/out/ConsultOfferPort'
import { JobOffer } from '@/job/domain/JobOffer'
import { DeleteOfferDTOUi } from '@/job/domain/DTO/DeleteOfferDto'
import { DeleteOfferValidator } from '@/job/application/validators/DeleteOfferValidator'

export class DeleteOfferService implements DeleteOfferUseCase {
  private deleteOfferPort: DeleteOfferPort
  private updateStatusPort: UpdateStatusPort
  private updateStatePort: UpdateStatePort<any>
  private consultOfferPort: ConsultOfferPort

  constructor(
    deleteOfferPort: DeleteOfferPort,
    updateStatusPort: UpdateStatusPort,
    updateStatePort: UpdateStatePort<any>,
    consultOfferPort: ConsultOfferPort
  ) {
    this.consultOfferPort = consultOfferPort
    this.deleteOfferPort = deleteOfferPort
    this.updateStatusPort = updateStatusPort
    this.updateStatePort = updateStatePort
  }

  public async execute(offerId: DeleteOfferDTOUi): Promise<void> {
    let id, jobOffer
    this.updateStatusPort.inProgress()

    try {
      id = new Id(offerId)
    } catch (error) {
      this.updateStatusPort.error(error.message)
      return
    }

    const consultResponse = await this.consultOfferPort.requestHandler(id)

    if (!consultResponse.success) {
      this.updateStatusPort.error()
      return
    }

    const OfferValidator = new DeleteOfferValidator(consultResponse.body)

    try {
      jobOffer = new JobOffer(OfferValidator.offerValues)
      jobOffer.isDeletable()
    } catch (error) {
      this.updateStatusPort.error(error.message)
      return
    }
    const response = await this.deleteOfferPort.requestHandler(offerId)

    if (response.success) {
      this.updateStatePort.setState(offerId)
      this.updateStatusPort.success()
    } else {
      this.updateStatusPort.error()
    }
  }
}
