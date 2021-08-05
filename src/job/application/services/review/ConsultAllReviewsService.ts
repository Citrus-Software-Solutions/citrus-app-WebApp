import { ConsultAllReviewsUseCase } from '@/job/application/use-cases/in/review/ConsultAllReviewsUseCase'
import { ConsultAllReviewsPort } from '@/job/application/use-cases/out/review/ConsultAllReviewsPort'
import { ConsultAllReviewsDTOUi } from '@/job/domain/DTO/review/ConsultAllReviewsDTO'
import { UpdateStatePort } from '@/shared/application/use-cases/out/UpdateStatePort'
import { UpdateStatusPort } from '@/shared/application/use-cases/out/UpdateStatusPort'

export class ConsultAllReviewsService implements ConsultAllReviewsUseCase {
  private consultAllReviewsPort: ConsultAllReviewsPort
  private updateStatePort: UpdateStatePort<any>
  private updateStatusPort: UpdateStatusPort

  constructor(
    consultAllReviewsPort: ConsultAllReviewsPort,
    updateStatePort: UpdateStatePort<any>,
    updateStatusPort: UpdateStatusPort
  ) {
    this.consultAllReviewsPort = consultAllReviewsPort
    this.updateStatePort = updateStatePort
    this.updateStatusPort = updateStatusPort
  }

  public async execute(employerId: ConsultAllReviewsDTOUi): Promise<void> {
    this.updateStatusPort.inProgress()
    const response = await this.consultAllReviewsPort.requestHandler(employerId)

    if (response.success) {
      this.updateStatePort.setState(response.body)
      this.updateStatusPort.idle()
    } else {
      this.updateStatusPort.error()
    }
  }
}
