import { Id } from '../../../domain/Identifier'

export interface ConsultOfferUseCase {
  execute(employerID: Id): void
}
