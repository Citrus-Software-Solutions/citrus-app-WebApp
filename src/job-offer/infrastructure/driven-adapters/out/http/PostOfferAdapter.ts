import { PostOfferPort } from '@/job-offer/application/ports/out/PostOfferPort'
import { JobOffer } from '@/job-offer/domain/JobOffer'
import { NotificationsPort } from '@/job-offer/application/ports/out/NotificationsPort'

export class PostOfferAdapter implements PostOfferPort {
  notificationsPort: NotificationsPort<{ message: string; type: string }>

  constructor(
    notificationsPort: NotificationsPort<{ message: string; type: string }>
  ) {
    this.notificationsPort = notificationsPort
  }

  async postOfferApi(jobOffer: JobOffer): Promise<void> {
    await fetch('http://localhost:8081/JobOffer', {
      //se debe cambiar a la ruta para post
      method: 'POST',
      body: JSON.stringify(jobOffer),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
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
        console.log(err)
      })
  }
}
