import { DeleteOfferDTOUi } from '@/job/domain/DTO/DeleteOfferDto'

export interface DeleteOfferUseCase {
  execute(offerID: DeleteOfferDTOUi): void
}
