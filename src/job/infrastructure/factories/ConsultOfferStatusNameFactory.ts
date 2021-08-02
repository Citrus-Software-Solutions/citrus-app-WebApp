import { ConsultOfferStatusNameController } from '@/job/infrastructure/controllers/ConsultOfferStatusNameController'
import { ConsultOfferStatusNameService } from '@/job/application/services/ConsultOfferStatusService'

export class ConsultOfferStatusNameFactory {
  public create(payload: number): string {
    const consultOfferStatusController = new ConsultOfferStatusNameController(
      new ConsultOfferStatusNameService()
    )
    return consultOfferStatusController.executeImpl(payload)
  }
}
