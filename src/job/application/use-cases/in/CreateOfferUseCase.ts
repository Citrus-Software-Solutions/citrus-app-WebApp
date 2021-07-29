import { CreateOfferDTOApp } from '../../../domain/DTO/CreateOfferDto'

export interface CreateOfferUseCase {
  execute(jobOffer: CreateOfferDTOApp): void
}
