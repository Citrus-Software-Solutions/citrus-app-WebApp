import { JobOfferDTO } from '@/job-offer/domain/DTO/JobOfferDTO'

export interface PostOfferPort {
  postOfferApi(joboffer: JobOfferDTO): void
}
