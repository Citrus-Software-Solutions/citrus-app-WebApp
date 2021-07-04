import { GetOfferAdapter } from '@/job-offer/infrastructure/driven-adapters/in/http/GetOfferAdapter'
import { PostOfferAdapter } from '@/job-offer/infrastructure/driven-adapters/out/http/PostOfferAdapter'
import { PostOfferValidationExceptionsAdapter } from '@/job-offer/infrastructure/driven-adapters/out/validation-exceptions/PostOfferValidationExceptionsAdapter'
import { IdGeneratorService } from '@/job-offer/application/services/IdGeneratorService'
import { UuidGenerator } from '@/job-offer/infrastructure/driven-adapters/in/uuidGenerator'
require('isomorphic-fetch')

const idGenerator = new IdGeneratorService(new UuidGenerator())
const offerID = idGenerator.createId()
const employerId = idGenerator.createId()

const mockJobOffer = {
  name: 'test',
  description: 'test',
  date_begin: new Date(),
  date_end: new Date(),
  gender: 'f',
  min_age: 20,
  max_age: 60,
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

describe('Testing database integration', () => {
  test('A job offer must be stored and fetched from the database', async () => {
    const notifications = new PostOfferValidationExceptionsAdapter()
    const postOfferAdapter = new PostOfferAdapter(notifications)
    const getOfferAdapter = new GetOfferAdapter()

    return postOfferAdapter.postOfferApi(mockJobOffer).then(() => {
      return getOfferAdapter.requestHandler(employerId).then((response) => {
        expect(response).toEqual(
          expect.arrayContaining([expect.objectContaining({ id: offerID })])
        )
      })
    })
  })
})
