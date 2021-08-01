import { _JobOffer } from '@/job/domain/JobOffer'

export abstract class InstancesValidator {
  public _offerFields: any
  public _offerErrors: { [name: string]: any }
  public _isValid: boolean
  public _offerValues: _JobOffer

  constructor(offerFields: any) {
    this._offerFields = offerFields
    this._offerErrors = {}
    this._isValid = false
    this._offerValues = null as unknown as _JobOffer
    this.createValues()
  }

  public get errors(): { [name: string]: any } {
    return this._offerErrors
  }

  public get offerValues(): _JobOffer {
    return this._offerValues
  }

  public isValid(): boolean {
    return this._isValid
  }

  public instanceCreator<T>(
    valueObj: any,
    fieldContent: any,
    fieldName?: string
  ): T | null {
    try {
      return new valueObj(fieldContent as T)
    } catch (error) {
      if (fieldName) {
        this._offerErrors[fieldName] = error.message
      }
      return null
    }
  }

  public dateParser(obj: any) {
    return obj.map((el: any) => ({
      init_date: new Date(el.init_date),
      end_date: new Date(el.end_date),
    }))
  }

  protected abstract createValues(): void
}
