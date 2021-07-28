import {
  CreateOfferDTOUi,
  CreateOfferDTOApp,
  CreateOfferDTOPersistence,
} from '@/job/domain/DTO/CreateOfferDto'
import { JobOffer } from '@/job/domain/JobOffer'
import { store } from '@/common-infrastructure/store'

export class CreateOfferMapper {
  public static toApplication(jobOffer: CreateOfferDTOUi): CreateOfferDTOApp {
    const employer = store.getters.getUser
    return {
      title: jobOffer.title,
      employer: employer,
      location: jobOffer.location,
      deadline: jobOffer.deadline,
      schedules: jobOffer.schedules,
      skills: jobOffer.skills,
      specialRequirements: jobOffer.specialRequirements,
      duration: jobOffer.duration,
      hourlyRate: jobOffer.hourlyRate,
      status: jobOffer.status,
      employee: [],
      id: '',
    }
  }

  public static toPersistence(jobOffer: JobOffer): CreateOfferDTOPersistence {
    return {
      title: jobOffer._title,
      employer: jobOffer._employer,
      location: jobOffer._location,
      deadline: jobOffer._deadline,
      schedules: jobOffer._schedules,
      skills: jobOffer._skills,
      specialRequirements: jobOffer._specialRequirements,
      duration: jobOffer._duration,
      hourlyRate: jobOffer._hourlyRate,
      status: jobOffer._status,
      employee: [],
    }
  }
}
