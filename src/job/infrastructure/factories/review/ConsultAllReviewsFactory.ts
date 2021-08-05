import { ConsultAllReviewsController } from '@/job/infrastructure/controllers/review/ConsultAllReviewsController'
import { ConsultAllReviewsService } from '@/job/application/services/review/ConsultAllReviewsService'
import { ConsultAllReviewsAdapter } from '@/job/infrastructure/driven-adapters/in/review/ConsultAllReviewsAdapter'
import { ConsultAllReviewsDTOUi } from '@/job/domain/DTO/review/ConsultAllReviewsDTO'
import { ConsultAllReviewsStateAdapter } from '../../driven-adapters/out/review/ConsultAllReviewsStateAdapter'
import { ConsultOfferStatusAdapter } from '../../driven-adapters/out/ConsultOfferStatusAdapter'

export class ConsultAllReviewsFactory {
  public create(payload: ConsultAllReviewsDTOUi): void {
    const consultAllReviewsController = new ConsultAllReviewsController(
      new ConsultAllReviewsService(
        new ConsultAllReviewsAdapter(),
        new ConsultAllReviewsStateAdapter(),
        new ConsultOfferStatusAdapter()
      )
    )
    consultAllReviewsController.executeImpl(payload)
  }
}
