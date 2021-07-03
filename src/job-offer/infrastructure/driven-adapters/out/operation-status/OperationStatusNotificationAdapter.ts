import { NotificationsPort } from '@/job-offer/application/ports/out/NotificationsPort'
import { store } from '@/common-infrastructure/store'

export class OperationStatusNotificationAdapter
  implements NotificationsPort<{ message: string; type: string }>
{
  notificationHandler(obj: { message: string; type: string }): void {
    store.commit('setOperationStatus', obj)
  }
}
