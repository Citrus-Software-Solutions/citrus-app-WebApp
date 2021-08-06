import router from '@/common-infrastructure/router'
import { store } from '@/common-infrastructure/store'
import { UpdateStatusPort } from '@/shared/application/use-cases/out/UpdateStatusPort'

export class SingUpStatusAdapter implements UpdateStatusPort {
  private STATE_NAME = 'setOperationStatus'

  public error(): void {
    store.commit(this.STATE_NAME, {
      type: 'ERROR',
      message:
        'HUBO UN ERROR DURANTE LA CREACION DEL USUARIO, INTENTAR NUEVAMENTE',
    })
  }

  public idle(): void {
    store.commit(this.STATE_NAME, { type: 'IDLE' })
  }

  public inProgress(): void {
    store.commit(this.STATE_NAME, { type: 'LOADING' })
  }

  public success(): void {
    window.location.reload()
    store.commit(this.STATE_NAME, {
      type: 'SUCCESS',
      message: 'USUARIO CREADO CORRECTAMENTE',
    })
  }
}
