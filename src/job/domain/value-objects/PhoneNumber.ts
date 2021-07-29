export interface _PhoneNumber {
  countryCode: number
  areaCode: number
  userNumber: number
}

export class PhoneNumber {
  private countryCode
  private areaCode
  private userNumber

  constructor(props: _PhoneNumber) {
    this.countryCode = props.countryCode
    this.areaCode = props.areaCode
    this.userNumber = props.userNumber
  }

  private validate() {
    if (
      this.countryCode !== 58 ||
      (this.areaCode !== 212 &&
        this.areaCode !== 412 &&
        this.areaCode !== 424 &&
        this.areaCode !== 414 &&
        this.areaCode !== 416 &&
        this.areaCode !== 426)
    ) {
      throw new Error('El número telefónico introducido no es correcto')
    }
  }
}
