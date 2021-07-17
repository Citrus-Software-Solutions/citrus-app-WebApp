import { UpdateStatePort } from '@/shared/application/use-cases/out/UpdateStatePort'
import { store } from '@/common-infrastructure/store'

export class CreateOfferErrorsAdapter
  implements UpdateStatePort<{ [name: string]: any }>
{
  setState(errors: { [name: string]: any }): void {
    store.commit('setAddJobFormError', errors)
  }
}
