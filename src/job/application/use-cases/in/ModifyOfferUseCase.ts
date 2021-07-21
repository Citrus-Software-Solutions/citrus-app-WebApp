import { JobOffer } from '../../../domain/JobOffer'

export interface ModifyOfferUseCase {
  execute(jobOffer: JobOffer): void
}
