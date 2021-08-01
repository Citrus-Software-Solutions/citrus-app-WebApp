import { ModifyOfferPort } from '@/job/application/use-cases/out/ModifyOfferPort'
import { ModifyOfferUseCase } from '@/job/application/use-cases/in/ModifyOfferUseCase'
import { CreateOfferValidator } from '../validators/CreateOfferValidator'
import { UpdateStatePort } from '@/shared/application/use-cases/out/UpdateStatePort'
import { UpdateStatusPort } from '@/shared/application/use-cases/out/UpdateStatusPort'
import { JobOffer } from '@/job/domain/JobOffer'
import { ModifyOfferDTO } from '@/job/domain/DTO/ModifyOfferDTO'

export class ModifyOfferService implements ModifyOfferUseCase {
  private modifyOfferPort: ModifyOfferPort
  private updateErrorStatePort: UpdateStatePort<any>
  private updateStatusPort: UpdateStatusPort

  constructor(
    modifyOfferPort: ModifyOfferPort,
    updateErrorStatePort: UpdateStatePort<any>,
    updateStatusPort: UpdateStatusPort
  ) {
    this.modifyOfferPort = modifyOfferPort
    this.updateErrorStatePort = updateErrorStatePort
    this.updateStatusPort = updateStatusPort
  }

  public async execute(OfferFields: ModifyOfferDTO): Promise<void> {
    const offerValidator = new CreateOfferValidator(OfferFields) //FIXME:pasar esto por constructor ?
    let jobOffer
    if (!offerValidator.isValid()) {
      this.updateErrorStatePort.setState(offerValidator.errors)
      return
    }

    try {
      jobOffer = new JobOffer(offerValidator.offerValues)
      jobOffer.checkModifiability()
    } catch (error) {
      this.updateStatusPort.error(error.message)
      return
    }

    this.updateStatusPort.inProgress()
    const response = await this.modifyOfferPort.requestHandler(jobOffer)

    if (response.success) {
      this.updateStatusPort.success()
    } else {
      this.updateStatusPort.error()
    }
  }
}
