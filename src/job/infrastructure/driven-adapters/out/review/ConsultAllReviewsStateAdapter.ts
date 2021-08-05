import { UpdateStatePort } from '@/shared/application/use-cases/out/UpdateStatePort'
import { store } from '@/common-infrastructure/store'

export class ConsultAllReviewsStateAdapter
  implements UpdateStatePort<{ [name: string]: any }>
{
  public setState(payload: { [name: string]: any }): void {
    store.commit('setAllReviews', payload)
  }
}
