import { PostOfferPort } from '@/job/application/use-cases/out/PostOfferPort'
import { JobOffer } from '@/job/domain/JobOffer'
import { NotificationsPort } from '@/job/application/use-cases/out/NotificationsPort'

export class PostOfferAdapter implements PostOfferPort {
  notificationsPort: NotificationsPort<{ message: string; type: string }>

  constructor(
    notificationsPort: NotificationsPort<{ message: string; type: string }>
  ) {
    this.notificationsPort = notificationsPort
  }

  async postOfferApi(jobOffer: JobOffer): Promise<void> {
    await fetch('http://localhost:3000/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(jobOffer),
    })
      .then((res) => res.json())
      .then((data) => {
        this.notificationsPort.notificationHandler({
          message: 'Oferta agregada exitosamente',
          type: 'success',
        })
      })
      .catch((err) => {
        this.notificationsPort.notificationHandler({
          message: 'Hubo un error durante la creación',
          type: 'error',
        })
      })
  }
}
