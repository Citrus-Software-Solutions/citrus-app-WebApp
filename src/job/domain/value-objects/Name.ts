export class Name {
  value: string
  isValid: boolean

  constructor(val: string) {
    this.value = val
    this.isValid = true
  }

  getIsValid(): boolean {
    return this.isValid
  }
}
