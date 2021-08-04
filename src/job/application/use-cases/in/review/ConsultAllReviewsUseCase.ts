import { Id } from '../../../../domain/value-objects/Identifier'
import { Review } from '../../../../domain/Review'

export interface ConsultAllReviewsUseCase {
  execute(idEmployer: Id): Review[]
}
