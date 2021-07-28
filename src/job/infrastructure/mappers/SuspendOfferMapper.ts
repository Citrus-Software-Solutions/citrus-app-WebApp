import { SuspendOfferDTOPersistence } from '@/job/domain/DTO/SuspendOfferDto'
import { JobOffer } from '@/job/domain/JobOffer'

export class SuspendOfferMapper {
  public static toPersistence(jobOffer: JobOffer): SuspendOfferDTOPersistence {
    return {
      id: jobOffer._id,
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
      employee: jobOffer._employee,
    }
  }
}
