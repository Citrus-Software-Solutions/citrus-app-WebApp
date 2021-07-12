export class Salary {
  value: number
  isValid: boolean

  constructor(val: number) {
    this.value = val
    this.isValid = val > 0
  }

  getIsValid(): boolean {
    return this.isValid
  }
}
