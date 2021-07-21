import { UpdateStatusPort } from '@/shared/application/use-cases/out/UpdateStatusPort'
import { store } from '@/common-infrastructure/store'
import router from '@/common-infrastructure/router'

export class ModifyOfferStatusAdapter implements UpdateStatusPort {
  private STATE_NAME = 'setOperationStatus'

  public error(): void {
    store.commit(this.STATE_NAME, {
      type: 'ERROR',
      message:
        'HUBO UN ERROR DURANTE LA MODIFICACIÓN DE LOS DATOS, INTENTAR NUEVAMENTE',
    })
  }

  public idle(): void {
    store.commit(this.STATE_NAME, { type: 'IDLE' })
  }

  public inProgress(): void {
    store.commit(this.STATE_NAME, { type: 'LOADING' })
  }

  public success(): void {
    router.push('/jobs') //FIXME: move it?
    store.commit(this.STATE_NAME, {
      type: 'SUCCESS',
      message: 'LA OFERTA FUE MODIFICADA EXITOSAMENTE',
    })
  }
}
