import {
  ConsultOfferStatusNameUseCase,
  OfferStatusNameType,
} from '../use-cases/in/ConsultOfferStatusNameUseCase'
import { _JobOfferStatus } from '@/job/domain/value-objects/JobOfferStatus'

export class ConsultOfferStatusNameService
  implements ConsultOfferStatusNameUseCase
{
  execute(status: number): OfferStatusNameType {
    let val: OfferStatusNameType = 'Sin Publicar'

    if (status === _JobOfferStatus['AplicationsClosed']) {
      val = 'Aplicaciones cerradas'
    } else if (status === _JobOfferStatus['Assigned']) {
      val = 'Asignada'
    } else if (status === _JobOfferStatus['Canceled']) {
      val = 'Cancelada'
    } else if (status === _JobOfferStatus['Finished']) {
      val = 'Finalizada'
    } else if (status === _JobOfferStatus['InProgress']) {
      val = 'En Progreso'
    } else if (status === _JobOfferStatus['OpenFoAplications']) {
      val = 'Publicada'
    } else if (status === _JobOfferStatus['Posted']) {
      val = 'Sin Publicar'
    }

    return val
  }
}
