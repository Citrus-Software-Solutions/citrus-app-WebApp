import { SingUpPort } from '@/Employer/application/ports/SingUpPort'
import { SingUpPersistence } from '@/Employer/domain/DTO/SingUpDTO'
import { req } from '@/shared/infrastructure/http'

export class SingUpAdapter implements SingUpPort {
  async requestHandler(
    singUp_body: SingUpPersistence
  ): Promise<
    | { status?: never; body?: never; success: boolean; error: Error }
    | { status: number; body: any; success: boolean; error?: never }
  > {
    console.log(singUp_body)
    const response = await req<any>({
      method: 'POST',
      url: process.env.VUE_APP_BASEURL + 'auth/signup/employer',
      body: singUp_body,
    })
    return response
  }
}
