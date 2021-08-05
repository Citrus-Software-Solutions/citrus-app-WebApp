export type CreateOfferDTOUi = {
  title: any
  location: {
    city: any
    state: any
    street1: any
    street2?: any
    _zip: any
  }
  dead_line: any
  schedules: any
  skills: any
  specialRequirements: any
  duration: any
  hourlyRate: any
  status: any
}

export type CreateOfferDTOPersistence = CreateOfferDTOUi & {
  employer: any
  employee: any
}

export type CreateOfferDTOApp = CreateOfferDTOPersistence & {
  id: any
}
