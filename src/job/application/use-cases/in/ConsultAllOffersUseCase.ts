import { Id } from '../../../domain/Identifier'

export interface ConsultAllOffersUseCase {
  execute(employerID: Id): void
}
