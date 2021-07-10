import { IdGeneratorPort } from '../use-cases/in/IdGeneratorPort'
import { Id } from '../../domain/value-objects/Identifier'

export class IdGeneratorService {
  idGenerator: IdGeneratorPort<Id>

  constructor(idGenerator: IdGeneratorPort<Id>) {
    this.idGenerator = idGenerator
  }

  createId(): Id {
    return this.idGenerator.generateId()
  }
}
