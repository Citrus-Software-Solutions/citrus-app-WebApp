import {
  ConsultOfferStatusNameUseCase,
  OfferStatusNameType,
} from '@/job/application/use-cases/in/ConsultOfferStatusNameUseCase'

export class ConsultOfferStatusNameController {
  private consultOfferStatusNameUseCase: ConsultOfferStatusNameUseCase

  constructor(consultOfferStatusNameUseCase: ConsultOfferStatusNameUseCase) {
    this.consultOfferStatusNameUseCase = consultOfferStatusNameUseCase
  }

  public executeImpl(status: number): OfferStatusNameType {
    return this.consultOfferStatusNameUseCase.execute(status)
  }
}
