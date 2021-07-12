import { GetOfferService } from '../../src/job/application/services/GetOfferService'
import { GetOfferAdapter } from '../../src/job/infrastructure/driven-adapters/in/GetOfferAdapter'
import { IdGeneratorService } from '@/job/application/services/IdGeneratorService'
import { UuidGenerator } from '@/job/infrastructure/driven-adapters/in/uuidGenerator'
require('isomorphic-fetch')

const idGenerator = new IdGeneratorService(new UuidGenerator())
const offerID = idGenerator.createId()

describe('Testing the get offer service to see if it returns an array', () => {
  it('Tests the use case service', async () => {
    const service = new GetOfferService(new GetOfferAdapter())
    return service.getOfferPort.requestHandler(offerID).then((res) => {
      expect(res).toEqual(expect.arrayContaining([expect.anything()]))
    })
  })
})
