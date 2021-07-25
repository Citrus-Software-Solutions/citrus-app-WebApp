export interface _PhoneNumber {
  countryCode: number
  areaCode: number
  userNumber: number
}

export class PhoneNumber {
  constructor(props: _PhoneNumber) {
    if (
      props.countryCode != 58 ||
      (props.areaCode != 212 &&
        props.areaCode != 412 &&
        props.areaCode != 424 &&
        props.areaCode != 414 &&
        props.areaCode != 416 &&
        props.areaCode != 426)
    ) {
      return new Error('El número telefónico introducido no es correcto')
    }
    return props
  }
}
