import { PublishOfferDTOPersistence } from '@/job/domain/DTO/PublishOfferDto'
import { JobOffer } from '@/job/domain/JobOffer'

export class PublishOfferMapper {
  public static toPersistence(jobOffer: JobOffer): PublishOfferDTOPersistence {
    return {
      id: jobOffer._id,
      title: jobOffer._title,
      employer: jobOffer._employer,
      location: jobOffer._location,
      dead_line: jobOffer._deadline,
      schedules: jobOffer._schedules,
      skills: jobOffer._skills,
      specialRequirements: jobOffer._specialRequirements,
      duration: jobOffer._duration,
      hourlyRate: jobOffer._hourlyRate,
      status: jobOffer._status,
      employee: jobOffer._employee,
    }
  }
}
