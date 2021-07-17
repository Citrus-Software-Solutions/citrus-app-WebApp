import { JobOffer } from '../../../domain/JobOffer'

export interface CreateOfferUseCase {
  execute(jobOffer: JobOffer): void
}
