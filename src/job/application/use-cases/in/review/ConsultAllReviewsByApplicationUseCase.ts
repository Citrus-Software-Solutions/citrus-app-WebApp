import { Id } from '../../../../domain/value-objects/Identifier'
import { Review } from '../../../../domain/Review'

export interface ConsultAllReviewsByApplicationUseCase {
  execute(idApplication: Id): Review[]
}
