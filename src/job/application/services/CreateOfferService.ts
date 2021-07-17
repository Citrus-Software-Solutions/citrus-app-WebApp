import { CreateOfferPort } from '@/job/application/use-cases/out/CreateOfferPort'
import { CreateOfferDTO } from '../../domain/DTO/CreateOfferDto'
import { CreateOfferUseCase } from '@/job/application/use-cases/in/CreateOfferUseCase'
import { PostOfferValidator } from '../validators/PostOfferValidator'
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

  public async execute(createOfferFields: CreateOfferDTO): Promise<void> {
    const postOfferValidator = new PostOfferValidator(createOfferFields) //FIXME:pasar esto por constructor ?
    let jobOffer

    if (!postOfferValidator.isValid()) {
      this.updateErrorStatePort.setState(postOfferValidator.errors)
      return
    }

    try {
      // FIXME: ver como solucionar el tema del id y del employee, mappers?
      jobOffer = new JobOffer({
        ...createOfferFields,
        id: '1',
        employee: {},
      })
    } catch (error) {
      // handle error on creation
      console.log(error)
    }

    this.updateStatusPort.inProgress()
    const response = await this.createOfferPort.requestHandler(
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
