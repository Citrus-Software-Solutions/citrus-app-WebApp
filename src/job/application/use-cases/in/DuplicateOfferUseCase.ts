import { DuplicateOfferDTOUi } from '@/job/domain/DTO/DuplicateOfferDto'

export interface DuplicateOfferUseCase {
  execute(offerId: DuplicateOfferDTOUi): void
}
