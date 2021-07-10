import { Message } from './Message'
import { Employee } from './Employee'
import { Employer } from './Employer'
import { Id } from './value-objects/Identifier'

export interface _Chat {
  id: Id
  messages: Message[]
  participants: [Employee, Employer]
}

export class Chat {
  constructor(props: _Chat) {
    //   validations
    return props
  }
}
