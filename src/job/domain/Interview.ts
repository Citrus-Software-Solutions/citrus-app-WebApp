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
  private id
  private employee
  private startDate
  private duration
  private accessURL
  private status

  constructor(props: _Interview) {
    this.id = props.id
    this.employee = props.employee
    this.startDate = props.startDate
    this.duration = props.duration
    this.accessURL = props.accessURL
    this.status = props.status
  }
}
