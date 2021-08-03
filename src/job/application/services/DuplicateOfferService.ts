import { DuplicateOfferUseCase } from '@/job/application/use-cases/in/DuplicateOfferUseCase'
import { ConsultOfferPort } from '@/job/application/use-cases/out/ConsultOfferPort'
import { CreateOfferPort } from '@/job/application/use-cases/out/CreateOfferPort'
import { JobOffer } from '@/job/domain/JobOffer'
import { Id } from '@/job/domain/value-objects/Identifier'
import { UpdateStatusPort } from '@/shared/application/use-cases/out/UpdateStatusPort'
import { DuplicateOfferDTOUi } from '@/job/domain/DTO/DuplicateOfferDto'
import { DuplicateOfferValidator } from '../validators/DuplicateOfferValidator'

export class DuplicateOfferService implements DuplicateOfferUseCase {
  private consultOfferPort: ConsultOfferPort
  private createOfferPort: CreateOfferPort
  private updateStatusPort: UpdateStatusPort

  constructor(
    consultOfferPort: ConsultOfferPort,
    updateStatusPort: UpdateStatusPort,
    createOfferPort: CreateOfferPort
  ) {
    this.consultOfferPort = consultOfferPort
    this.updateStatusPort = updateStatusPort
    this.createOfferPort = createOfferPort
  }

  public async execute(offerId: DuplicateOfferDTOUi): Promise<void> {
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

    const OfferValidator = new DuplicateOfferValidator(consultResponse.body)

    try {
      jobOffer = new JobOffer(OfferValidator.offerValues)
      jobOffer.isDuplicable()
    } catch (error) {
      this.updateStatusPort.error(error.message)
      return
    }

    const createResponse = await this.createOfferPort.requestHandler(
      jobOffer as JobOffer
    )

    if (createResponse.success) {
      this.updateStatusPort.success()
    } else {
      this.updateStatusPort.error()
      return
    }
  }
}
