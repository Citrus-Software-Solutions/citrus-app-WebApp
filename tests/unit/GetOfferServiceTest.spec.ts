import { GetOfferService } from '../../src/job-offer/application/services/GetOfferService'
import { GetOfferAdapter } from '../../src/job-offer/infrastructure/driven-adapters/in/http/GetOfferAdapter'
require('isomorphic-fetch')

describe('Testing the get offer service to see if it returns an array', () => {
  it('Tests the use case service', async () => {
    const service = new GetOfferService(new GetOfferAdapter())
    return service.getOfferPort.requestHandler('ID').then((res) => {
      expect(res).toEqual(expect.arrayContaining([expect.anything()]))
    })
  })
})
