import { JobOffer } from '@/job/domain/JobOffer'
import { Id } from '@/job/domain/value-objects/Identifier'

export interface DeleteOfferPort {
  requestHandler(
    offerId: Id
  ): Promise<
    | { status?: never; body?: never; success: boolean; error: Error }
    | { status: number; body: JobOffer; success: boolean; error?: never }
  >
}
