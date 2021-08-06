import { UpdateStatePort } from '@/shared/application/use-cases/out/UpdateStatePort'
import { UpdateStatusPort } from '@/shared/application/use-cases/out/UpdateStatusPort'
import { CreateReviewPort } from '../../use-cases/out/review/CreateReviewPort'
import { CreateReviewDTOApp } from '../../../domain/DTO/review/CreateReviewDTO'
import { Review } from '@/job/domain/Review'
import { CreateReviewUseCase } from '../../use-cases/in/review/CreateReviewUseCase'

export class CreateReviewService implements CreateReviewUseCase {
  private createReviewPort: CreateReviewPort
  private updateErrorStatePort: UpdateStatePort<any>
  private updateStatusPort: UpdateStatusPort

  constructor(
    createReviewPort: CreateReviewPort,
    updateErrorStatePort: UpdateStatePort<any>,
    updateStatusPort: UpdateStatusPort
  ) {
    this.createReviewPort = createReviewPort
    this.updateErrorStatePort = updateErrorStatePort
    this.updateStatusPort = updateStatusPort
  }

  public async execute(createReviewFields: CreateReviewDTOApp): Promise<void> {
    let review
    try {
      review = new Review(createReviewFields)
    } catch (error) {
      this.updateStatusPort.error(error.message)
      this.updateErrorStatePort.setState({
        'Problema al crear el review... Lo sentimos':
          'Problema al crear el review... Lo sentimos',
      })
    }

    this.updateStatusPort.inProgress()
    const response = await this.createReviewPort.requestHandler(
      review as Review
    )
    if (response.success) {
      this.updateStatusPort.success()
    } else {
      this.updateStatusPort.error()
    }
  }
}
