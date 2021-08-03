import { UpdateStatusPort } from '@/shared/application/use-cases/out/UpdateStatusPort'
import { store } from '@/common-infrastructure/store'

export class DuplicateOfferStatusAdapter implements UpdateStatusPort {
  private STATE_NAME = 'setOperationStatus'

  public error(msg?: string): void {
    store.commit(this.STATE_NAME, {
      type: 'ERROR',
      message:
        msg ||
        'HUBO UN ERROR DURANTE LA DUPLICACIÓN DE LA OFERTA, INTENTAR NUEVAMENTE',
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
      message: msg || 'LA OFERTA FUE DUPLICADA EXITOSAMENTE',
      key: new Date(),
    })
  }
}
