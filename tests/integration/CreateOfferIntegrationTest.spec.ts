import { JobOffer } from '@/job/domain/JobOffer'
import { CreateOfferAdapter } from '../../src/job/infrastructure/driven-adapters/out/CreateOfferAdapter'
import { CreateOfferValidator } from '@/job/application/validators/CreateOfferValidator'
require('isomorphic-fetch')

const data = {
  id: 0,
  title: 'test',
  employer: {
    id: 1,
  },
  location: {
    city: 'test',
    state: 'test',
    street1: 'test',
    street2: 'test',
    _zip: '1234',
  },
  dead_line: '2021-8-4',
  schedules: [
    {
      init_date: new Date('2021-08-01T23:03:02.636Z'),
      end_date: new Date('2021-08-02T00:03:02.636Z'),
    },
  ],
  skills: [
    {
      name: 'test',
      category: '1',
    },
  ],
  specialRequirements: 'test',
  duration: 1,
  hourlyRate: 10,
  status: 0,
  employee: {},
}

describe('Given the CreateOfferAdapter', () => {
  const createOfferAdapter = new CreateOfferAdapter()
  let jobOffer: JobOffer

  try {
    const offerValidator = new CreateOfferValidator(data)
    jobOffer = new JobOffer(offerValidator.offerValues)
  } catch (error) {
    console.log(error)
  }

  describe('When the operation is successful', () => {
    const spyOncreateAdapter = jest.spyOn(createOfferAdapter, 'requestHandler')
    createOfferAdapter.requestHandler(jobOffer)
    expect(spyOncreateAdapter).toHaveBeenCalled()

    const apiResponse = () => spyOncreateAdapter.mock.results[0].value

    it('Then should store the information in the database and return a message of success success', async () => {
      return expect(await apiResponse()).toEqual(
        expect.objectContaining({
          success: true,
        })
      )
    })
  })
})
