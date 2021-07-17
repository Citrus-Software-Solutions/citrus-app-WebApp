import { UpdateStatusPort } from '@/shared/application/use-cases/out/UpdateStatusPort'
import { store } from '@/common-infrastructure/store'

export class DeleteOfferStatusAdapter implements UpdateStatusPort {
  private STATE_NAME = 'setOperationStatus'

  public error(): void {
    store.commit(this.STATE_NAME, {
      type: 'ERROR',
      message:
        'HUBO UN ERROR DURANTE LA ELIMINACIÓN DE LA OFERTA, INTENTAR NUEVAMENTE',
    })
  }

  public idle(): void {
    store.commit(this.STATE_NAME, { type: 'IDLE' })
  }

  public inProgress(): void {
    store.commit(this.STATE_NAME, { type: 'LOADING' })
  }

  public success(): void {
    store.commit(this.STATE_NAME, {
      type: 'SUCCESS',
      message: 'LA OFERTA FUE ELIMINADA EXITOSAMENTE',
    })
  }
}
