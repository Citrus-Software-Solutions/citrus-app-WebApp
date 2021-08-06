import { LoginPort } from '@/Employer/application/ports/LoginPort'
import { req } from '../../../shared/infrastructure/http'

export class LoginAdapter implements LoginPort {
  public async requestUser(
    id: number
  ): Promise<
    | { status?: never; body?: never; success: boolean; error: Error }
    | { status: number; body: any; success: boolean; error?: never }
  > {
    const response = await req<any>({
      method: 'GET',
      url: process.env.VUE_APP_BASEURL + `users/${id}`,
    })
    return response
  }

  public async requestHandler(payload: {
    username: string
    password: string
  }): Promise<
    | { status?: never; body?: never; success: boolean; error: Error }
    | { status: number; body: any; success: boolean; error?: never }
  > {
    const response = await req<any>({
      method: 'POST',
      url: process.env.VUE_APP_BASEURL + 'auth/signin',
      body: payload,
    })
    return response
  }

  public async requestEmployer(
    employer_id: number
  ): Promise<
    | { status?: never; body?: never; success: boolean; error: Error }
    | { status: number; body: any; success: boolean; error?: never }
  > {
    const response = await req<any>({
      method: 'GET',
      url: process.env.VUE_APP_BASEURL + `employers/${employer_id}`,
    })

    return response
  }
}
