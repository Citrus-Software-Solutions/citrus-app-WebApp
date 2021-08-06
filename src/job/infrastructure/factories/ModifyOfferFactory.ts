import { ModifyOfferService } from '@/job/application/services/ModifyOfferService'
import { ModifyOfferController } from '@/job/infrastructure/controllers/ModifyOfferController'
import { ModifyOfferAdapter } from '@/job/infrastructure/driven-adapters/out/ModifyOfferAdapter'
import { CreateOfferErrorsAdapter } from '@/job/infrastructure/driven-adapters/out/CreateOfferErrorsAdapter'
import { ModifyOfferStatusAdapter } from '@/job/infrastructure/driven-adapters/out/ModifyOfferStatusAdapter'
import { ModifyOfferDTO } from '@/job/domain/DTO/ModifyOfferDTO'

export class ModifyOfferFactory {
  public create(payload: ModifyOfferDTO): void {
    const modifyOfferErrorsAdapter = new CreateOfferErrorsAdapter()
    const modifyOfferAdapter = new ModifyOfferAdapter()
    const modifyStatusAdapter = new ModifyOfferStatusAdapter()
    const modifyOfferService = new ModifyOfferService(
      modifyOfferAdapter,
      modifyOfferErrorsAdapter,
      modifyStatusAdapter
    )
    const createOfferController = new ModifyOfferController(modifyOfferService)
    createOfferController.executeImpl(payload)
  }
}
