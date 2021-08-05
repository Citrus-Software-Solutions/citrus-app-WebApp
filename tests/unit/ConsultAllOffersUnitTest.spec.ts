import { ConsultAllOffersService } from '../../src/job/application/services/ConsultAllOffersService'
import { ConsultAllOffersAdapter } from '../../src/job/infrastructure/driven-adapters/in/ConsultAllOffersAdapter'
import { ConsultAllOffersController } from '@/job/infrastructure/controllers/ConsultAllOffersController'
import { ConsultAllOffersStateAdapter } from '@/job/infrastructure/driven-adapters/out/ConsultAllOffersStateAdapter'
import { ConsultOfferStatusAdapter } from '@/job/infrastructure/driven-adapters/out/ConsultOfferStatusAdapter'
import fetchMock from 'jest-fetch-mock'

fetchMock.enableMocks()

beforeEach(() => {
  fetchMock.resetMocks()
})

const consultAllOffersTestFactory = () => {
  const consultAllOffersAdapter = new ConsultAllOffersAdapter()
  const consultStatusAdapter = new ConsultOfferStatusAdapter()
  const consultAllOfferService = new ConsultAllOffersService(
    consultAllOffersAdapter,
    new ConsultAllOffersStateAdapter(),
    consultStatusAdapter
  )

  const spyOnConsultAdapter = jest.spyOn(
    consultAllOffersAdapter,
    'requestHandler'
  )

  const spyOnConsultAllOfferService = jest.spyOn(
    consultAllOfferService,
    'execute'
  )

  const consultAllOffersController = new ConsultAllOffersController(
    consultAllOfferService
  )
  return {
    spyOnConsultAdapter,
    consultAllOffersController,
    spyOnConsultAllOfferService,
  }
}

describe('Given the ConsultAllOffers service', () => {
  const mockData = { body: 'success' } //fake return value
  const {
    spyOnConsultAdapter,
    consultAllOffersController,
    spyOnConsultAllOfferService,
  } = consultAllOffersTestFactory()

  describe('When the operation is successful', () => {
    fetchMock.mockResponseOnce(JSON.stringify(mockData))

    consultAllOffersController.executeImpl(1) //fake id

    expect(spyOnConsultAdapter).toHaveBeenCalled()
    expect(spyOnConsultAllOfferService).toHaveBeenCalled()

    const apiResponse = () => spyOnConsultAdapter.mock.results[0].value

    it('Then should return an object with the information, the status and the success propery set to  true', async () => {
      return expect(await apiResponse()).toEqual(
        expect.objectContaining({
          success: true,
          body: mockData,
        })
      )
    })
  })
})

describe('Given the ConsultAllOffers service', () => {
  const {
    spyOnConsultAdapter,
    consultAllOffersController,
    spyOnConsultAllOfferService,
  } = consultAllOffersTestFactory()

  describe('When the operation went wrong', () => {
    const error = new Error('something went wrong')
    fetchMock.mockReject(error)
    consultAllOffersController.executeImpl(1) //fake id
    expect(spyOnConsultAdapter).toHaveBeenCalled()
    expect(spyOnConsultAllOfferService).toHaveBeenCalled()

    const apiResponse = () => spyOnConsultAdapter.mock.results[0].value

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
