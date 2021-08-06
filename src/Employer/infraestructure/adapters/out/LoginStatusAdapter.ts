import { UpdateStatusPort } from '@/shared/application/use-cases/out/UpdateStatusPort'
import { store } from '@/common-infrastructure/store'
import router from '@/common-infrastructure/router'

export class LoginStatusAdapter implements UpdateStatusPort {
  private STATE_NAME = 'setOperationStatus'

  public error(): void {
    store.commit(this.STATE_NAME, {
      type: 'ERROR',
      message:
        'HUBO UN ERROR DURANTE LA VERIFICACIÓN DEL USUARIO, INTENTAR NUEVAMENTE',
    })
  }

  public idle(): void {
    store.commit(this.STATE_NAME, { type: 'IDLE' })
  }

  public inProgress(): void {
    store.commit(this.STATE_NAME, { type: 'LOADING' })
  }

  public success(): void {
    router.push('/app/jobs')
    store.commit(this.STATE_NAME, {
      type: 'SUCCESS',
      message: 'USUARIO VERIFICADO CORRECTAMENTE',
    })
  }
}
