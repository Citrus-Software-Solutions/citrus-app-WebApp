import { Id } from '../../../../domain/value-objects/Identifier'
import { Review } from '../../../../domain/Review'

export interface ConsultAllReviewsByApplicationUseCase {
  execute(idEmployer: Id, idApplication: Id): Review[]
}
