import { UpdateStatusPort } from '@/shared/application/use-cases/out/UpdateStatusPort'
import { store } from '@/common-infrastructure/store'

export class SuspendOfferStatusAdapter implements UpdateStatusPort {
  private STATE_NAME = 'setOperationStatus'

  public error(msg?: string): void {
    store.commit(this.STATE_NAME, {
      type: 'ERROR',
      message:
        msg ||
        'HUBO UN ERROR DURANTE LA SUSPENCIÓN DE LA OFERTA, INTENTAR NUEVAMENTE',
    })
  }

  public idle(): void {
    store.commit(this.STATE_NAME, { type: 'IDLE' })
  }

  public inProgress(): void {
    store.commit(this.STATE_NAME, { type: 'LOADING' })
  }

  public success(msg?: string): void {
    store.commit(this.STATE_NAME, {
      type: 'SUCCESS',
      message: msg || 'LA OFERTA FUE SUSPENDIDA EXITOSAMENTE',
      key: new Date(),
    })
  }
}
