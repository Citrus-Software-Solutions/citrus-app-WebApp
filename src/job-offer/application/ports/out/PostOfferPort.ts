import { BasicJobOfferDTO } from '@/job-offer/domain/DTO/JobOfferDTO'
import { JobOffer } from '@/job-offer/domain/JobOffer'

export interface PostOfferPort {
  postOfferApi(joboffer: JobOffer): Promise<BasicJobOfferDTO> //Job offer -> parameter & returns Identifier
}
