export class DateRange {
  initDate: Date
  finishDate: Date
  isValid: boolean

  constructor(initDate: Date, finishDate: Date) {
    this.initDate = initDate
    this.finishDate = finishDate
    this.isValid = initDate <= finishDate
  }

  getIsValid(): boolean {
    return this.isValid
  }
}
