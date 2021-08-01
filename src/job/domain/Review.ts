import { Employee } from './Employee'
import { Application } from './Application'
import { Employer } from './Employer'
import { Id } from './value-objects/Identifier'

export enum Scores {
  Excellent = 1,
  AboveAverage,
  Average,
  BelowAverage,
  VeryPoor,
}

export interface _Questions {
  Question1: string
  Question2: string
  Question3: string
  Question4: string
  Question5: string
}

export interface _Review {
  id: Id //Added
  questions: _Questions
  scores: Scores[]
  totalScore: number
  employee: Employee
  application: Application
  employer: Employer
}
export class Review {
  private id
  private questions
  private scores
  private totalScore
  private employee
  private application
  private employer

  constructor(props: _Review) {
    this.id = props.id
    this.questions = props.questions
    this.scores = props.scores
    this.totalScore = props.totalScore
    this.employee = props.employee
    this.application = props.application
    this.employer = props.employer
  }

  get _questions(): _Questions {
    return this.questions
  }

  get _scores(): Scores[] {
    return this.scores
  }

  get _totalScore(): number {
    let totalScore = 0
    for (const score of this.scores) {
      totalScore += score
    }
    return totalScore
  }

  get _employee(): Employee {
    return this.employee
  }

  get _application(): Application {
    return this.application
  }

  get _employer(): Employer {
    return this.employer
  }
}
