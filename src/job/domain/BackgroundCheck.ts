import { Id } from './value-objects/Identifier'

export interface _BackgroundCheck {
  id: Id
  status: number //FIXME:
  statusDetails: string
  reportURL: string
  alerts: string[] // what is this?
}

export class BackgroundCheck {
  constructor(props: _BackgroundCheck) {
    //   validations
    return props
  }
}
