import { Id } from '../../../domain/Identifier'

export interface ConsultOfferUseCase {
  execute(offerId: Id): void
}
