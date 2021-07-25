export enum _Status {
  Active = 0,
  Suspended,
}

export class EmployerStatus {
  private _employerStatus: _Status

  constructor(status: _Status) {
    this._employerStatus = status
  }

  get EmployerStatus(): _Status {
    return this._employerStatus
  }

  set EmployerStatus(status: _Status) {
    this._employerStatus = status
  }
}
