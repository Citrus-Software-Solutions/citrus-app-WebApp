export type CreateOfferDTOUi = {
  title: any
  location: {
    city: any
    state: any
    street1: any
    street2?: any
    zip: any
  }
  dead_line: any
  schedules: any
  skills: any
  special_requirements: any
  duration: any
  hourly_rate: any
  status: any
}

export type CreateOfferDTOPersistence = Omit<CreateOfferDTOUi, 'status'> & {
  employer: any
}

export type CreateOfferDTOApp = CreateOfferDTOUi & {
  id: any
  employee: any
  employer: any
}
