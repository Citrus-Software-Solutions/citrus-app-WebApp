import { ModifyOfferPort } from '@/job/application/use-cases/out/ModifyOfferPort'
import { ModifyOfferUseCase } from '@/job/application/use-cases/in/ModifyOfferUseCase'
import { PostOfferValidator } from '../validators/PostOfferValidator'
import { UpdateStatePort } from '@/shared/application/use-cases/out/UpdateStatePort'
import { UpdateStatusPort } from '@/shared/application/use-cases/out/UpdateStatusPort'
import { JobOffer, _JobOffer } from '@/job/domain/JobOffer'

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

  public async execute(OfferFields: _JobOffer): Promise<void> {
    const postOfferValidator = new PostOfferValidator(OfferFields) //FIXME:pasar esto por constructor ?
    let jobOffer

    if (!postOfferValidator.isValid()) {
      this.updateErrorStatePort.setState(postOfferValidator.errors)
      return
    }

    try {
      jobOffer = new JobOffer(OfferFields)
    } catch (error) {
      // handle error on creation
      console.log(error)
    }

    this.updateStatusPort.inProgress()
    const response = await this.modifyOfferPort.requestHandler(
      jobOffer as JobOffer
    )
    if (response.success) {
      // redireccionar?
      this.updateStatusPort.success()
    } else {
      this.updateStatusPort.error()
    }
  }
}
