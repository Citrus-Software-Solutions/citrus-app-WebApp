import { JobOfferDTO } from '../../../../domain/DTO/JobOfferDTO'

export interface PostOfferUseCase {
  PostOffer(jobOffer: JobOfferDTO): void
}
