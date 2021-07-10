import { Id } from './value-objects/Identifier'
import { Employee } from './Employee'

export interface _Interview {
  id: Id
  employee: Employee
  startDate: Date //hora y día
  duration: number //expresado en minutos
  accessURL: string //url de la entrevista
  status: number // FIXME:
}

export class Interview {
  constructor(props: _Interview) {
    //   validations
    return props
  }
}
