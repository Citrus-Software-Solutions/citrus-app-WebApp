import { PublishOfferDTOUi } from '@/job/domain/DTO/PublishOfferDto'

export interface PublishOfferUseCase {
  execute(offerId: PublishOfferDTOUi): void
}
