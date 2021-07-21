import { Id } from '@/job/domain/value-objects/Identifier'
import { JobOffer } from '@/job/domain/JobOffer'

export interface ConsultOfferPort {
  requestHandler(
    offerId: Id
  ): Promise<
    | { status?: never; body?: never; success: boolean; error: Error }
    | { status: number; body: JobOffer; success: boolean; error?: never }
  >
}
