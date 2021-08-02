import { ConsultOfferController } from '@/job/infrastructure/controllers/ConsultOfferController'
import { ConsultOfferService } from '@/job/application/services/ConsultOfferService'
import { ConsultOfferAdapter } from '@/job/infrastructure/driven-adapters/in/ConsultOfferAdapter'
import { ConsultOfferStateAdapter } from '@/job/infrastructure/driven-adapters/out/ConsultOfferStateAdapter'
import { ConsultOfferStatusAdapter } from '@/job/infrastructure/driven-adapters/out/ConsultOfferStatusAdapter'
import { ConsultOfferDTOUi } from '@/job/domain/DTO/ConsultOfferDto'

export class ConsultOfferFactory {
  public create(payload: ConsultOfferDTOUi): void {
    const consultOfferController = new ConsultOfferController(
      new ConsultOfferService(
        new ConsultOfferAdapter(),
        new ConsultOfferStateAdapter(),
        new ConsultOfferStatusAdapter()
      )
    )
    consultOfferController.executeImpl(payload)
  }
}
