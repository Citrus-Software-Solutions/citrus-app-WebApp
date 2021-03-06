import { ModifyOfferDTO } from '@/job/domain/DTO/ModifyOfferDTO'
import { JobOffer } from '@/job/domain/JobOffer'
import { store } from '@/common-infrastructure/store'

export class ModifyOfferMapper {
  public static toApplication(jobOffer: ModifyOfferDTO): ModifyOfferDTO {
    const originalJobOffer = store.getters.getJobOffer
    return {
      id: originalJobOffer.id,
      title: jobOffer.title,
      employer: originalJobOffer.employer,
      location: jobOffer.location,
      dead_line: jobOffer.dead_line,
      schedules: jobOffer.schedules,
      skills: jobOffer.skills,
      special_requirements: jobOffer.special_requirements,
      duration: jobOffer.duration,
      hourly_rate: jobOffer.hourly_rate,
      status: originalJobOffer.status,
      employee: originalJobOffer.employee,
    }
  }
  public static toPersistence(jobOffer: JobOffer): ModifyOfferDTO {
    return {
      id: jobOffer._id,
      title: jobOffer._title,
      employer: jobOffer._employer,
      location: jobOffer._location,
      dead_line: jobOffer._deadline,
      schedules: jobOffer._schedules,
      skills: jobOffer._skills,
      special_requirements: jobOffer._specialRequirements,
      duration: jobOffer._duration,
      hourly_rate: jobOffer._hourlyRate,
      status: jobOffer._status,
      employee: jobOffer._employee,
    }
  }
}
