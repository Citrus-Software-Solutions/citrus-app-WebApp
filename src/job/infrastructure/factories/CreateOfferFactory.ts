import { CreateOfferService } from '@/job/application/services/CreateOfferService'
import { CreateOfferController } from '@/job/infrastructure/controllers/CreateOfferController'
import { CreateOfferAdapter } from '@/job/infrastructure/driven-adapters/out/CreateOfferAdapter'
import { CreateOfferErrorsAdapter } from '@/job/infrastructure/driven-adapters/out/CreateOfferErrorsAdapter'
import { CreateOfferStatusAdapter } from '@/job/infrastructure/driven-adapters/out/CreateOfferStatusAdapter'
import { CreateOfferDTOUi } from '@/job/domain/DTO/CreateOfferDto'

export class CreateOfferFactory {
  public create(payload: CreateOfferDTOUi): void {
    const createOfferErrorsAdapter = new CreateOfferErrorsAdapter()
    const createOfferAdapter = new CreateOfferAdapter()
    const updateStatusAdapter = new CreateOfferStatusAdapter()
    const createOfferService = new CreateOfferService(
      createOfferAdapter,
      createOfferErrorsAdapter,
      updateStatusAdapter
    )
    const createOfferController = new CreateOfferController(createOfferService)
    createOfferController.executeImpl(payload)
  }
}
