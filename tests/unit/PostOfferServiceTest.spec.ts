import { PostOfferAdapter } from '@/job/infrastructure/driven-adapters/out/PostOfferAdapter'
import { PostOfferValidationExceptionsAdapter } from '@/job/infrastructure/driven-adapters/out/PostOfferValidationExceptionsAdapter'
import { PostOfferService } from '@/job/application/services/PostOfferService'
import { IdGeneratorService } from '@/job/application/services/IdGeneratorService'
import { UuidGenerator } from '@/job/infrastructure/driven-adapters/in/uuidGenerator'
require('isomorphic-fetch')

const idGenerator = new IdGeneratorService(new UuidGenerator())
const offerID = idGenerator.createId()
const employerId = idGenerator.createId()

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

describe('testing post offer method to see if it invokes the PostOffer method implemented in the service', () => {
  it('spying on post method of PostOfferService', () => {
    const notifications = new PostOfferValidationExceptionsAdapter()
    const postOfferAdapter = new PostOfferAdapter(notifications)
    const service = new PostOfferService(postOfferAdapter, notifications)
    const spyOnService = jest.spyOn(service, 'PostOffer')
    service.PostOffer(jobOfferMock)
    expect(spyOnService).toHaveBeenCalled()
  })
})
