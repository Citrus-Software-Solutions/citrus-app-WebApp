import { GetOfferPort } from '../../../../application/ports/out/GetOfferPort'

export class GetOfferAdapter implements GetOfferPort {
  async fetchData<T>(url: string): Promise<any> {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    console.log(response)
    return (await response.json()) as T
  }

  async requestHandler(id: any): Promise<any> {
    const response = await this.fetchData<any>(
      // `${process.env.VUE_APP_BASEURL}/JobOffer`
      'http://localhost:3000/jobs'
    )
    console.log(response)
    return response
  }
}
