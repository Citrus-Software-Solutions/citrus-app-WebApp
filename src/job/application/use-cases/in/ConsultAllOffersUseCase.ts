import { ConsultAllOfferDTOUi } from '@/job/domain/DTO/ConsultAllOfferDto'

export interface ConsultAllOffersUseCase {
  execute(employerID: ConsultAllOfferDTOUi): void
}
