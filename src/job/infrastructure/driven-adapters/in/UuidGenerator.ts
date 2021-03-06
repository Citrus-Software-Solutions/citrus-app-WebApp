import { IdGeneratorPort } from '../../../application/use-cases/in/IdGeneratorPort'
import { v4 as uuidv4 } from 'uuid'

export class UuidGenerator implements IdGeneratorPort<string> {
  generateId(): string {
    return uuidv4()
  }
}
