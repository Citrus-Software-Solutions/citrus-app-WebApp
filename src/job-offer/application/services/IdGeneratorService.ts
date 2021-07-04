import { IdGeneratorPort } from '../ports/in/IdGeneratorPort'
import { Id } from '../../domain/model/Identifier'

export class IdGeneratorService {
  idGenerator: IdGeneratorPort<Id>

  constructor(idGenerator: IdGeneratorPort<Id>) {
    this.idGenerator = idGenerator
  }

  createId(): Id {
    return this.idGenerator.generateId()
  }
}
