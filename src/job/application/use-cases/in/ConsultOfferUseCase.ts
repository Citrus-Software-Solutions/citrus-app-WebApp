import { ConsultOfferDTOUi } from '../../../domain/DTO/ConsultOfferDto'

export interface ConsultOfferUseCase {
  execute(offerId: ConsultOfferDTOUi): void
}
