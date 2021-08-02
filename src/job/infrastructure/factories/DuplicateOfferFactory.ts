import { DuplicateOfferDTOUi } from '@/job/domain/DTO/DuplicateOfferDto'
import { DuplicateOfferService } from '@/job/application/services/DuplicateOfferService'
import { DuplicateOfferController } from '@/job/infrastructure/controllers/DuplicateOfferController'
import { ConsultOfferAdapter } from '@/job/infrastructure/driven-adapters/in/ConsultOfferAdapter'
import { DuplicateOfferStatusAdapter } from '@/job/infrastructure/driven-adapters/out/DuplicateOfferStatusAdapter'
import { DuplicateOfferAdapter } from '@/job/infrastructure/driven-adapters/out/DuplicateOfferAdapter'

export class DuplicateOfferFactory {
  public create(payload: DuplicateOfferDTOUi): void {
    const duplicateOfferStatusAdapter = new DuplicateOfferStatusAdapter()
    const consultOfferAdapter = new ConsultOfferAdapter()
    const duplicateOfferAdapter = new DuplicateOfferAdapter()
    const duplicateOfferService = new DuplicateOfferService(
      consultOfferAdapter,
      duplicateOfferStatusAdapter,
      duplicateOfferAdapter
    )
    const duplicateOfferController = new DuplicateOfferController(
      duplicateOfferService
    )
    duplicateOfferController.executeImpl(payload)
  }
}
