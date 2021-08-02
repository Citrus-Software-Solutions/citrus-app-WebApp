import { ConsultOfferAdapter } from '@/job/infrastructure/driven-adapters/in/ConsultOfferAdapter'
import { PublishOfferService } from '@/job/application/services/PublishOfferService'
import { PublishOfferController } from '@/job/infrastructure/controllers/PublishOfferController'
import { PublishOfferAdapter } from '@/job/infrastructure/driven-adapters/out/PublishOfferAdapter'
import { PublishOfferStatusAdapter } from '@/job/infrastructure/driven-adapters/out/PublishOfferStatusAdapter'
import { PublishOfferDTOUi } from '@/job/domain/DTO/PublishOfferDto'

export class PublishOfferFactory {
  public create(payload: PublishOfferDTOUi): void {
    const publishOfferStatusAdapter = new PublishOfferStatusAdapter()
    const consultOfferAdapter = new ConsultOfferAdapter()
    const publishOfferAdapter = new PublishOfferAdapter()
    const publishOfferService = new PublishOfferService(
      consultOfferAdapter,
      publishOfferStatusAdapter,
      publishOfferAdapter
    )
    const publishOfferController = new PublishOfferController(
      publishOfferService
    )
    publishOfferController.executeImpl(payload)
  }
}
