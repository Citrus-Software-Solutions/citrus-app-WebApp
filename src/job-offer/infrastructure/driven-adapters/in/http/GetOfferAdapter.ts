import { GetOfferPort } from '../../../../application/ports/out/GetOfferPort'

export class Http implements GetOfferPort {
  async fetchData<T>(url: string): Promise<any> {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    return (await response.json()) as T
  }

  async requestHandler(id: any): Promise<any> {
    const response = await this.fetchData<any>('http://localhost:3000/jobs')
    return response
  }
}