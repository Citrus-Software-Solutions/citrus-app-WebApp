import { DeleteOfferController } from '@/job/infrastructure/controllers/DeleteOfferController'
import { DeleteOfferService } from '@/job/application/services/DeleteOfferService'
import { DeleteOfferAdapter } from '@/job/infrastructure/driven-adapters/out/DeleteOfferAdapter'
import { DeleteOfferStatusAdapter } from '@/job/infrastructure/driven-adapters/out/DeleteOfferStatusAdapter'
import { DeleteOfferStateAdapter } from '@/job/infrastructure/driven-adapters/out/DeleteOfferStateAdapter'
import { DeleteOfferDTOUi } from '@/job/domain/DTO/DeleteOfferDto'
import { ConsultOfferAdapter } from '@/job/infrastructure/driven-adapters/in/ConsultOfferAdapter'

export class DeleteOfferFactory {
  public create(payload: DeleteOfferDTOUi): void {
    const deleteOfferStatusAdapter = new DeleteOfferStatusAdapter()
    const deleteOfferAdapter = new DeleteOfferAdapter()
    const deleteOfferStateAdapter = new DeleteOfferStateAdapter()
    const consultOfferAdapter = new ConsultOfferAdapter()

    const deleteOfferService = new DeleteOfferService(
      deleteOfferAdapter,
      deleteOfferStatusAdapter,
      deleteOfferStateAdapter,
      consultOfferAdapter
    )
    const deleteOfferController = new DeleteOfferController(deleteOfferService)
    deleteOfferController.executeImpl(payload)
  }
}
