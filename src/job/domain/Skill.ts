// import { Id } from './value-objects/Identifier'

export interface _Skill {
  // id: Id
  name: string
  category: number //FIXME:
}

export class Skill {
  private skill: _Skill[]

  constructor(props: _Skill[]) {
    this.skill = props
  }

  public get _skill() {
    return this.skill
  }
}
