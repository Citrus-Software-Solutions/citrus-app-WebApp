import { PublishOfferUseCase } from '@/job/application/use-cases/in/PublishOfferUseCase'
import { ConsultOfferPort } from '@/job/application/use-cases/out/ConsultOfferPort'
import { PublishOfferPort } from '@/job/application/use-cases/out/PublishOfferPort'
import { JobOffer } from '@/job/domain/JobOffer'
import { Id } from '@/job/domain/value-objects/Identifier'
import { UpdateStatusPort } from '@/shared/application/use-cases/out/UpdateStatusPort'
import { PublishOfferDTOUi } from '@/job/domain/DTO/PublishOfferDto'
import { PublishOfferValidator } from '../validators/PublishOfferValidator'

export class PublishOfferService implements PublishOfferUseCase {
  private consultOfferPort: ConsultOfferPort
  private publishOfferPort: PublishOfferPort
  private updateStatusPort: UpdateStatusPort

  constructor(
    consultOfferPort: ConsultOfferPort,
    updateStatusPort: UpdateStatusPort,
    publishOfferPort: PublishOfferPort
  ) {
    this.consultOfferPort = consultOfferPort
    this.updateStatusPort = updateStatusPort
    this.publishOfferPort = publishOfferPort
  }

  public async execute(offerId: PublishOfferDTOUi): Promise<void> {
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

    const OfferValidator = new PublishOfferValidator(consultResponse.body)

    try {
      jobOffer = new JobOffer(OfferValidator.offerValues)
      jobOffer.publishOffer()
    } catch (error) {
      this.updateStatusPort.error(error.message)
      return
    }

    const response = await this.publishOfferPort.requestHandler(
      jobOffer as JobOffer
    )

    if (response.success) {
      this.updateStatusPort.success()
    } else {
      this.updateStatusPort.error()
      return
    }
  }
}
