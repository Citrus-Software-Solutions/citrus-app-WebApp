import { SuspendOfferDTOUi } from '@/job/domain/DTO/SuspendOfferDto'

export interface SuspendOfferUseCase {
  execute(offerId: SuspendOfferDTOUi): void
}
