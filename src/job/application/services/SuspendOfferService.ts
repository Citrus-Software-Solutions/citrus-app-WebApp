import { SuspendOfferUseCase } from '@/job/application/use-cases/in/SuspendOfferUseCase'
import { ConsultOfferPort } from '@/job/application/use-cases/out/ConsultOfferPort'
import { SuspendOfferPort } from '@/job/application/use-cases/out/SuspendOfferPort'
import { JobOffer } from '@/job/domain/JobOffer'
import { Id } from '@/job/domain/value-objects/Identifier'
import { UpdateStatusPort } from '@/shared/application/use-cases/out/UpdateStatusPort'
import { SuspendOfferDTOUi } from '@/job/domain/DTO/SuspendOfferDto'
import { SuspendOfferValidator } from '../validators/SuspendOfferValidator'

export class SuspendOfferService implements SuspendOfferUseCase {
  private consultOfferPort: ConsultOfferPort
  private suspendOfferPort: SuspendOfferPort
  private updateStatusPort: UpdateStatusPort

  constructor(
    consultOfferPort: ConsultOfferPort,
    updateStatusPort: UpdateStatusPort,
    suspendOfferPort: SuspendOfferPort
  ) {
    this.consultOfferPort = consultOfferPort
    this.updateStatusPort = updateStatusPort
    this.suspendOfferPort = suspendOfferPort
  }

  public async execute(offerId: SuspendOfferDTOUi): Promise<void> {
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

    const OfferValidator = new SuspendOfferValidator(consultResponse.body)

    try {
      jobOffer = new JobOffer(OfferValidator.offerValues)
      jobOffer.suspendOffer()
    } catch (error) {
      this.updateStatusPort.error(error.message)
      return
    }

    const response = await this.suspendOfferPort.requestHandler(
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
