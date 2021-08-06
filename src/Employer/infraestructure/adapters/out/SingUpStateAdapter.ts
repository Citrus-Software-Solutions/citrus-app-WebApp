import { store } from '@/common-infrastructure/store'
import { UpdateStatePort } from '@/shared/application/use-cases/out/UpdateStatePort'

export class SingUpStateAdapter
  implements UpdateStatePort<{ [name: string]: any }>
{
  setState(payload: { [name: string]: any }): void {
    store.commit('setEmployer', payload)
  }
}
