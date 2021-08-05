import { Id } from '../../../../domain/value-objects/Identifier'
import { Review } from '../../../../domain/Review'
import { Employee } from '../../../../domain/Employee'
import { Employer } from '../../../../domain/Employer'

export interface ConsultAllReviewsByApplicationUseCase {
  execute(idApplication: Id, empployee: Employee, employer: Employer): Review
}
