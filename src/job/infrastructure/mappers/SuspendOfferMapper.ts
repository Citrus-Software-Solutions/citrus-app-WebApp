import { SuspendOfferDTOPersistence } from '@/job/domain/DTO/SuspendOfferDto'
import { JobOffer } from '@/job/domain/JobOffer'

export class SuspendOfferMapper {
  public static toPersistence(jobOffer: JobOffer): SuspendOfferDTOPersistence {
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
