import { DuplicateOfferDTOPersistence } from '@/job/domain/DTO/DuplicateOfferDto'
import { JobOffer } from '@/job/domain/JobOffer'

export class DuplicateOfferMapper {
  public static toPersistence(
    jobOffer: JobOffer
  ): DuplicateOfferDTOPersistence {
    return {
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
