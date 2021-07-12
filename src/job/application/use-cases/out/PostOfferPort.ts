import { JobOffer } from '@/job/domain/JobOffer'

export interface PostOfferPort {
  postOfferApi(joboffer: JobOffer): void
}
