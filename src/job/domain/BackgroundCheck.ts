import { Id } from './value-objects/Identifier'

export interface _BackgroundCheck {
  id: Id
  status: number //FIXME:
  statusDetails: string
  reportURL: string
  alerts: string[] // what is this?
}

export class BackgroundCheck {
  private id
  private status
  private statusDetails
  private reportURL
  private alerts

  constructor(props: _BackgroundCheck) {
    this.id = props.id
    this.status = props.status
    this.statusDetails = props.statusDetails
    this.reportURL = props.reportURL
    this.alerts = props.alerts
  }
}
