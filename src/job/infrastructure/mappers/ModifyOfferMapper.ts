import { ModifyOfferDTO } from '@/job/domain/DTO/ModifyOfferDTO'
import { JobOffer } from '@/job/domain/JobOffer'

export class ModifyOfferMapper {
  public static toPersistence(jobOffer: JobOffer): ModifyOfferDTO {
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
