import { DuplicateOfferDTOPersistence } from '@/job/domain/DTO/DuplicateOfferDto'
import { JobOffer } from '@/job/domain/JobOffer'

export class DuplicateOfferMapper {
  public static toPersistence(
    jobOffer: JobOffer
  ): DuplicateOfferDTOPersistence {
    return {
      title: jobOffer._title,
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
