import { UpdateStatePort } from '@/shared/application/use-cases/out/UpdateStatePort'
import { store } from '@/common-infrastructure/store'

export class DeleteOfferStateAdapter
  implements UpdateStatePort<{ [name: string]: any }>
{
  public setState(payload: { [name: string]: any }): void {
    const newState = store.getters.getAllJobOffers.filter(
      (el: any) => el.id !== payload
    )

    store.commit('setAllJobOffers', newState)
  }
}
