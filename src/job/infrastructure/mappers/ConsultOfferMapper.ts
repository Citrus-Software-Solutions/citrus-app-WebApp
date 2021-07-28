import { ConsultOfferDTOUi } from '@/job/domain/DTO/ConsultOfferDto'
import { Id } from '@/job/domain/value-objects/Identifier'

export class ConsultOfferMapper {
  public static toPersistence(id: Id): ConsultOfferDTOUi {
    return id._id
  }
}
