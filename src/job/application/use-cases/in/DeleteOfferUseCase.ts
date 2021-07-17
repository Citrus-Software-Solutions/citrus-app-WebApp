import { Id } from '../../../domain/Identifier'

export interface DeleteOfferUseCase {
  execute(offerID: Id): void
}
