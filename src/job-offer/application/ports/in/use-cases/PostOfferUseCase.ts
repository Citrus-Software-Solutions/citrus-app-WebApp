import { JobOffer } from '../../../../domain/model/JobOffer'

export interface PostOfferUseCase {
  PostOffer(jobOffer: JobOffer): void
}
