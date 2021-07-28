import { JobOffer } from '@/job/domain/JobOffer'

export interface SuspendOfferPort {
  requestHandler(
    joboffer: JobOffer
  ): Promise<
    | { status?: never; body?: never; success: boolean; error: Error }
    | { status: number; body: JobOffer; success: boolean; error?: never }
  >
}
