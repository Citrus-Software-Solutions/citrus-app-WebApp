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
      dead_line: jobOffer.dead_line,
      schedules: jobOffer.schedules,
      skills: jobOffer.skills,
      special_requirements: jobOffer.special_requirements,
      duration: jobOffer.duration,
      hourly_rate: jobOffer.hourly_rate,
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
      dead_line: jobOffer._deadline,
      schedules: null,
      // schedules: jobOffer._schedules,
      skills: null,
      // skills: jobOffer._skills,
      special_requirements: jobOffer._specialRequirements,
      duration: jobOffer._duration,
      hourly_rate: jobOffer._hourlyRate,
    }
  }
}
