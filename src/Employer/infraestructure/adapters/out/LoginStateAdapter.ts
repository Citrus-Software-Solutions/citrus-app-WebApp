import { UpdateStatePort } from '@/shared/application/use-cases/out/UpdateStatePort'
import { store } from '@/common-infrastructure/store/index'

export class LoginStateAdaptare
  implements UpdateStatePort<{ [name: string]: any }>
{
  setState(payload: { [name: string]: any }): void {
    store.commit('setEmployer', payload.employer)
    store.commit('setUser', payload.user)
  }
}
