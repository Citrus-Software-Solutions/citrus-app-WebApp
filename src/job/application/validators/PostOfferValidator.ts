import { JobOffer } from '../../domain/JobOffer'
import { DateRange } from '../../domain/value-objects/DateRange'
import { Age } from '../../domain/value-objects/Age'
import { Description } from '../../domain/value-objects/Description'
import { Location } from '../../domain/value-objects/Location'
import { Name } from '../../domain/value-objects/Name'
import { Salary } from '../../domain/value-objects/Salary'
import { Vacancy } from '../../domain/value-objects/Vacancy'

/*Arreglar validacion de post offer para que este en PostOfferService Para eliminar la carpeta validnators*/

export class PostOfferValidator {
  jobOfferFields: JobOffer
  formErrors: { [name: string]: any }

  constructor(jobOfferFields: JobOffer) {
    this.jobOfferFields = jobOfferFields
    this.formErrors = {}
  }

  getformErrors(): { [name: string]: any } {
    return this.formErrors
  }

  isValid(): boolean {
    let isValid = true
    const dateRange = new DateRange(
      this.jobOfferFields.date_begin,
      this.jobOfferFields.date_end
    )
    const age = new Age(this.jobOfferFields.min_age)
    const description = new Description(this.jobOfferFields.description)
    const location = new Location(this.jobOfferFields.location.name)
    const name = new Name(this.jobOfferFields.name)
    const salary = new Salary(this.jobOfferFields.salary)
    const vacancy = new Vacancy(this.jobOfferFields.available_vacans)

    if (!dateRange.getIsValid()) {
      this.formErrors.date_begin =
        'La fecha de inicio debe ser inferior a la de fin'
      this.formErrors.date_end =
        'La fecha de inicio debe ser inferior a la de fin'
      isValid = false
    }
    if (!age.getIsValid()) {
      this.formErrors.min_age = 'La edad introducida es inválida'
    }
    if (!description.getIsValid()) {
      this.formErrors.description = 'La descripción introducida es inválida'
      isValid = false
    }
    if (!location.getIsValid()) {
      this.formErrors.location = 'La ubicación introducida es inválida'
      isValid = false
    }
    if (!name.getIsValid()) {
      this.formErrors.name = 'El nombre introducido es inválido'
      isValid = false
    }
    if (!salary.getIsValid()) {
      this.formErrors.salary = 'El salario introducido es inválida'
      isValid = false
    }
    if (!vacancy.getIsValid()) {
      this.formErrors.available_vacans =
        'El numero de vacantes introducido es inválido'
      isValid = false
    }

    return isValid
  }
}
