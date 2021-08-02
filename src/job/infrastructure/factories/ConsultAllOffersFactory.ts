import { ConsultAllOffersController } from '@/job/infrastructure/controllers/ConsultAllOffersController'
import { ConsultAllOffersService } from '@/job/application/services/ConsultAllOffersService'
import { ConsultAllOffersAdapter } from '@/job/infrastructure/driven-adapters/in/ConsultAllOffersAdapter'
import { ConsultAllOffersStateAdapter } from '@/job/infrastructure/driven-adapters/out/ConsultAllOffersStateAdapter'
import { ConsultOfferStatusAdapter } from '@/job/infrastructure/driven-adapters/out/ConsultOfferStatusAdapter'
import { ConsultAllOfferDTOUi } from '@/job/domain/DTO/ConsultAllOfferDto'

export class ConsultAllOffersFactory {
  public create(payload: ConsultAllOfferDTOUi): void {
    const consultAllOffersController = new ConsultAllOffersController(
      new ConsultAllOffersService(
        new ConsultAllOffersAdapter(),
        new ConsultAllOffersStateAdapter(),
        new ConsultOfferStatusAdapter()
      )
    )
    consultAllOffersController.executeImpl(payload)
  }
}
