enum _JobOfferStatus {
  Posted = 0,
  OpenFoAplications,
  AplicationsClosed,
  Assigned,
  InProgress,
  Finished,
  Canceled,
}

export class JobOfferStatus {
  private _jobOfferStatus: _JobOfferStatus

  constructor(jobofferstatus: _JobOfferStatus) {
    this._jobOfferStatus = jobofferstatus
  }

  get jobOfferStatus() {
    return this._jobOfferStatus
  }

  public setToCanceled(): any {
    if (this.jobOfferStatus === _JobOfferStatus['Canceled']) {
      throw new Error('Ya la oferta se encuentra cancelada')
    }
    this._jobOfferStatus = _JobOfferStatus['Canceled']
  }
}
