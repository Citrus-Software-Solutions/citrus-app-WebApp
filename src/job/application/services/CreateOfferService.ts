import { CreateOfferPort } from '@/job/application/use-cases/out/CreateOfferPort'
import { CreateOfferDTOApp } from '../../domain/DTO/CreateOfferDto'
import { CreateOfferUseCase } from '@/job/application/use-cases/in/CreateOfferUseCase'
import { CreateOfferValidator } from '../validators/CreateOfferValidator'
import { UpdateStatePort } from '@/shared/application/use-cases/out/UpdateStatePort'
import { UpdateStatusPort } from '@/shared/application/use-cases/out/UpdateStatusPort'
import { JobOffer } from '@/job/domain/JobOffer'

export class CreateOfferService implements CreateOfferUseCase {
  private createOfferPort: CreateOfferPort
  private updateErrorStatePort: UpdateStatePort<any>
  private updateStatusPort: UpdateStatusPort

  constructor(
    createOfferPort: CreateOfferPort,
    updateErrorStatePort: UpdateStatePort<any>,
    updateStatusPort: UpdateStatusPort
  ) {
    this.createOfferPort = createOfferPort
    this.updateErrorStatePort = updateErrorStatePort
    this.updateStatusPort = updateStatusPort
  }

  public async execute(createOfferFields: CreateOfferDTOApp): Promise<void> {
    const offerValidator = new CreateOfferValidator(createOfferFields)
    let jobOffer
    if (!offerValidator.isValid()) {
      this.updateErrorStatePort.setState(offerValidator.errors)
      return
    }

    try {
      jobOffer = new JobOffer(offerValidator.offerValues)
    } catch (error) {
      this.updateStatusPort.error(error.message)
      return
    }

    this.updateStatusPort.inProgress()
    const response = await this.createOfferPort.requestHandler(
      jobOffer as JobOffer
    )
    if (response.success) {
      this.updateStatusPort.success()
    } else {
      this.updateStatusPort.error()
    }
  }
}
