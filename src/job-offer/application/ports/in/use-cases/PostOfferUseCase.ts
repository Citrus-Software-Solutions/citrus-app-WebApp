import { BasicJobOfferDTO } from '@/job-offer/domain/DTO/JobOfferDTO'
import { JobOffer } from '../../../../domain/JobOffer'
export interface PostOfferUseCase {
  PostOffer(jobOffer: JobOffer): Promise<BasicJobOfferDTO>
}
