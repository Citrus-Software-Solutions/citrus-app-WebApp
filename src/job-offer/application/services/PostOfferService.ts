import { PostOfferPort } from '../ports/out/PostOfferPort'
import { PostOfferUseCase } from '../ports/in/use-cases/PostOfferUseCase'
import { PostOfferValidator } from '../validators/PostOfferValidator'
import { NotificationsPort } from '../ports/out/NotificationsPort'
import { JobOfferDTO } from '../../domain/DTO/JobOfferDTO'

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

  public PostOffer(jobOffer: JobOfferDTO): void {
    const postOfferValidator = new PostOfferValidator(jobOffer)

    if (postOfferValidator.isValid()) {
      this.postOfferPort.postOfferApi(jobOffer)
    } else {
      this.notificationsPort.notificationHandler(
        postOfferValidator.getformErrors()
      )
    }
  }
}
