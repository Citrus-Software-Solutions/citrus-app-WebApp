import { PostOfferPort } from '../ports/out/PostOfferPort'
import { JobOffer } from '../../domain/JobOffer'
import { PostOfferUseCase } from '../ports/in/use-cases/PostOfferUseCase'
import { PostOfferValidator } from '../validators/PostOfferValidator'
import { NotificationsPort } from '../ports/out/NotificationsPort'

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

  public PostOffer(jobOffer: JobOffer): void {
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
