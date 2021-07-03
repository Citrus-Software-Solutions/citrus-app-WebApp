import { NotificationsPort } from '@/job-offer/application/ports/out/NotificationsPort'
import { store } from '@/common-infrastructure/store'

export class PostOfferValidationExceptionsAdapter
  implements NotificationsPort<{ [name: string]: any }>
{
  notificationHandler(errors: { [name: string]: any }): void {
    store.commit('setAddJobFormError', errors)
  }
}
