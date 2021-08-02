import { ConsultOfferAdapter } from '@/job/infrastructure/driven-adapters/in/ConsultOfferAdapter'
import { SuspendOfferService } from '@/job/application/services/SuspendOfferService'
import { SuspendOfferController } from '@/job/infrastructure/controllers/SuspendOfferController'
import { SuspendOfferAdapter } from '@/job/infrastructure/driven-adapters/out/SuspendOfferAdapter'
import { SuspendOfferStatusAdapter } from '@/job/infrastructure/driven-adapters/out/SuspendOfferStatusAdapter'
import { SuspendOfferDTOUi } from '@/job/domain/DTO/SuspendOfferDto'

export class SuspendOfferFactory {
  public create(payload: SuspendOfferDTOUi): void {
    const suspendOfferStatusAdapter = new SuspendOfferStatusAdapter()
    const consultOfferAdapter = new ConsultOfferAdapter()
    const suspendOfferAdapter = new SuspendOfferAdapter()
    const suspendOfferService = new SuspendOfferService(
      consultOfferAdapter,
      suspendOfferStatusAdapter,
      suspendOfferAdapter
    )
    const suspendOfferController = new SuspendOfferController(
      suspendOfferService
    )
    suspendOfferController.executeImpl(payload)
  }
}
