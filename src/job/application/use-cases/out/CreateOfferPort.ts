import { JobOffer } from '@/job/domain/JobOffer'

export interface CreateOfferPort {
  requestHandler(
    joboffer: JobOffer
  ): Promise<
    | { status?: never; body?: never; success: boolean; error: Error }
    | { status: number; body: JobOffer; success: boolean; error?: never }
  >
}
