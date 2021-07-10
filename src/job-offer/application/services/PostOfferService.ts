import { PostOfferPort } from '../ports/out/PostOfferPort'
import { CreateOfferDTO } from '../../domain/DTO/CreateOfferDto'
import { PostOfferUseCase } from '../ports/in/use-cases/PostOfferUseCase'
import { PostOfferValidator } from '../validators/PostOfferValidator'
import { NotificationsPort } from '../ports/out/NotificationsPort'
import { JobOffer } from '@/job-offer/domain/model/JobOffer'

export class PostOfferService implements PostOfferUseCase {
  postOfferPort: PostOfferPort
  notificationsPort: NotificationsPort<{ [name: string]: any }>

  constructor(
    postOfferPort: PostOfferPort,
    notificationsPort: NotificationsPort<{ [name: string]: any }>
  ) {
    this.postOfferPort = postOfferPort
    this.notificationsPort = notificationsPort
  }

  public PostOffer(createOfferFields: CreateOfferDTO): void {
    const postOfferValidator = new PostOfferValidator(createOfferFields)
    if (postOfferValidator.isValid()) {
      try {
        // Create the job offer
        // FIXME: ver como solucionar el tema del id y del employee, mappers?
        const jobOffer = new JobOffer({
          ...createOfferFields,
          id: '1',
          employee: {},
        })
        this.postOfferPort.postOfferApi(jobOffer)
      } catch (error) {
        // handle error on creation
        console.log(error)
      }
    } else {
      this.notificationsPort.notificationHandler(postOfferValidator.errors)
    }
  }
}
