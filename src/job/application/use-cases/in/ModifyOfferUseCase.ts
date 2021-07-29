import { ModifyOfferDTO } from '../../../domain/DTO/ModifyOfferDTO'

export interface ModifyOfferUseCase {
  execute(jobOffer: ModifyOfferDTO): void
}
