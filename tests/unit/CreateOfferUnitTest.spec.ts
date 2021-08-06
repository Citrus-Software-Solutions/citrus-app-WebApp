import { CreateOfferService } from '@/job/application/services/CreateOfferService'
import { CreateOfferController } from '@/job/infrastructure/controllers/CreateOfferController'
import { CreateOfferAdapter } from '@/job/infrastructure/driven-adapters/out/CreateOfferAdapter'
import { CreateOfferErrorsAdapter } from '@/job/infrastructure/driven-adapters/out/CreateOfferErrorsAdapter'
import { CreateOfferStatusAdapter } from '@/job/infrastructure/driven-adapters/out/CreateOfferStatusAdapter'
import fetchMock from 'jest-fetch-mock'

fetchMock.enableMocks()

beforeEach(() => {
  fetchMock.resetMocks()
})

const createOfferTestFactory = () => {
  const createOfferErrorsAdapter = new CreateOfferErrorsAdapter()
  const createOfferAdapter = new CreateOfferAdapter()
  const updateStatusAdapter = new CreateOfferStatusAdapter()
  const createOfferService = new CreateOfferService(
    createOfferAdapter,
    createOfferErrorsAdapter,
    updateStatusAdapter
  )

  const spyOnCreateAdapter = jest.spyOn(createOfferAdapter, 'requestHandler')

  const spyOnCreateOfferService = jest.spyOn(createOfferService, 'execute')

  const createOfferController = new CreateOfferController(createOfferService)
  return {
    spyOnCreateAdapter,
    createOfferController,
    spyOnCreateOfferService,
  }
}

const data = {
  title: 'test',
  employer: {
    id: 1,
  },
  location: {
    city: 'test',
    state: 'test',
    street1: 'test',
    street2: 'test',
    zip: '1234',
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
  special_requirements: 'test',
  duration: 1,
  hourly_rate: 10,
  status: 0,
  employee: {},
}

describe('Given the CreateOffer service', () => {
  const { spyOnCreateAdapter, createOfferController, spyOnCreateOfferService } =
    createOfferTestFactory()

  describe('When the operation is successful', () => {
    fetchMock.mockResponseOnce(JSON.stringify({ body: 'success' }))

    createOfferController.executeImpl(data) //fake data

    expect(spyOnCreateAdapter).toHaveBeenCalled()
    expect(spyOnCreateOfferService).toHaveBeenCalled()

    const apiResponse = () => spyOnCreateAdapter.mock.results[0].value

    it('Then should return an object with the information, the status and the success propery set to  true', async () => {
      return expect(await apiResponse()).toEqual(
        expect.objectContaining({
          success: true,
        })
      )
    })
  })
})

describe('Given the CreateOffer service', () => {
  const { spyOnCreateAdapter, createOfferController, spyOnCreateOfferService } =
    createOfferTestFactory()

  describe('When the operation went wrong', () => {
    const error = new Error('something went wrong')
    fetchMock.mockReject(error)
    createOfferController.executeImpl(data) //fake data
    expect(spyOnCreateAdapter).toHaveBeenCalled()
    expect(spyOnCreateOfferService).toHaveBeenCalled()

    const apiResponse = () => spyOnCreateAdapter.mock.results[0].value

    it('Then should return an object with an error message and the success propery set to  false', async () => {
      return expect(await apiResponse()).toEqual(
        expect.objectContaining({
          success: false,
          error,
        })
      )
    })
  })
})
