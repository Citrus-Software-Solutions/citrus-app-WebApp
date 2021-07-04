import { PostOfferAdapter } from '@/job-offer/infrastructure/driven-adapters/out/http/PostOfferAdapter'
import { PostOfferValidationExceptionsAdapter } from '@/job-offer/infrastructure/driven-adapters/out/validation-exceptions/PostOfferValidationExceptionsAdapter'
import { PostOfferService } from '@/job-offer/application/services/PostOfferService'
import { JobOffer } from '@/job-offer/domain/model/JobOffer'
require('isomorphic-fetch')

const offerID = new Date().toString()
const employerId = 'testId'

const jobOfferMock = {
  name: 'unit test',
  description: 'test from post offer unit test',
  date_begin: new Date(),
  date_end: new Date(),
  gender: 'm',
  min_age: 21,
  max_age: 35,
  salary: 3000000,
  available_vacans: 3,
  status: 'test',
  location: {
    id: 'test',
    name: 'test',
    type: 'test',
  },
  employer: {
    id: employerId,
    name: 'test',
  },
  id: offerID,
}

describe('Post offer service test', () => {
  it('spying on post method', () => {
    const notifications = new PostOfferValidationExceptionsAdapter()
    const postOfferAdapter = new PostOfferAdapter(notifications)
    const service = new PostOfferService(postOfferAdapter, notifications)
    const spyOnService = jest.spyOn(service, 'PostOffer')
    service.PostOffer(jobOfferMock)
    expect(spyOnService).toHaveBeenCalled()
  })
})
