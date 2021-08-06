import { CreateOfferService } from '@/job/application/services/CreateOfferService'
import { CreateReviewController } from '@/job/infrastructure/controllers/review/CreateReviewController'
import { CreateOfferAdapter } from '@/job/infrastructure/driven-adapters/out/CreateOfferAdapter'
import { CreateOfferErrorsAdapter } from '@/job/infrastructure/driven-adapters/out/CreateOfferErrorsAdapter'
import { CreateOfferStatusAdapter } from '@/job/infrastructure/driven-adapters/out/CreateOfferStatusAdapter'
import { CreateReviewDTOUi } from '@/job/domain/DTO/review/CreateReviewDTO'
import { CreateReviewAdapter } from '../../driven-adapters/in/review/CreateReviewAdapter'
import { CreateReviewService } from '@/job/application/services/review/CreateReviewService'

export class CreateReviewFactory {
  public create(payload: CreateReviewDTOUi): void {
    const createReviewErrorsAdapter = new CreateOfferErrorsAdapter()
    const createReviewAdapter = new CreateReviewAdapter()
    const updateStatusAdapter = new CreateOfferStatusAdapter()
    const createReviewService = new CreateReviewService(
      createReviewAdapter,
      createReviewErrorsAdapter,
      updateStatusAdapter
    )
    const createReviewController = new CreateReviewController(
      createReviewService
    )
    createReviewController.executeImpl(payload)
  }
}
