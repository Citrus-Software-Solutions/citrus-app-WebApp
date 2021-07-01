import { JobOffer } from '../../../../domain/JobOffer'

export interface PostOfferUseCase {
  PostOffer(jobOffer: JobOffer): void
}
