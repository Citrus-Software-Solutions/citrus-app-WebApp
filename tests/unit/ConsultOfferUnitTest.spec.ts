import { ConsultOfferService } from '../../src/job/application/services/ConsultOfferService'
import { ConsultOfferAdapter } from '../../src/job/infrastructure/driven-adapters/in/ConsultOfferAdapter'
import { ConsultOfferController } from '@/job/infrastructure/controllers/ConsultOfferController'
import { ConsultOfferStateAdapter } from '@/job/infrastructure/driven-adapters/out/ConsultOfferStateAdapter'
import { ConsultOfferStatusAdapter } from '@/job/infrastructure/driven-adapters/out/ConsultOfferStatusAdapter'
import fetchMock from 'jest-fetch-mock'

fetchMock.enableMocks()

beforeEach(() => {
  fetchMock.resetMocks()
})

const consultOfferTestFactory = () => {
  const consultOfferAdapter = new ConsultOfferAdapter()
  const consultStatusAdapter = new ConsultOfferStatusAdapter()
  const consultOfferervice = new ConsultOfferService(
    consultOfferAdapter,
    new ConsultOfferStateAdapter(),
    consultStatusAdapter
  )

  const spyOnConsultAdapter = jest.spyOn(consultOfferAdapter, 'requestHandler')

  const spyOnConsultOfferervice = jest.spyOn(consultOfferervice, 'execute')

  const consultOfferController = new ConsultOfferController(consultOfferervice)
  return {
    spyOnConsultAdapter,
    consultOfferController,
    spyOnConsultOfferervice,
  }
}

describe('Given the ConsultOffer service', () => {
  const mockData = { body: 'success' } //fake return value
  const {
    spyOnConsultAdapter,
    consultOfferController,
    spyOnConsultOfferervice,
  } = consultOfferTestFactory()

  describe('When the operation is successful', () => {
    fetchMock.mockResponseOnce(JSON.stringify(mockData))

    consultOfferController.executeImpl(1) //fake id

    expect(spyOnConsultAdapter).toHaveBeenCalled()
    expect(spyOnConsultOfferervice).toHaveBeenCalled()
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

describe('Given the ConsultOffer service', () => {
  const {
    spyOnConsultAdapter,
    consultOfferController,
    spyOnConsultOfferervice,
  } = consultOfferTestFactory()

  describe('When the operation went wrong', () => {
    const error = new Error('something went wrong')
    fetchMock.mockReject(error)
    consultOfferController.executeImpl(1) //fake id
    expect(spyOnConsultAdapter).toHaveBeenCalled()
    expect(spyOnConsultOfferervice).toHaveBeenCalled()
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
