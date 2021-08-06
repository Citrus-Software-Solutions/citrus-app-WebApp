import { SingUpPersistence } from '../../domain/DTO/SingUpDTO'
export interface SingUpPort {
  requestHandler(singUp_body: SingUpPersistence): Promise<any>
}
