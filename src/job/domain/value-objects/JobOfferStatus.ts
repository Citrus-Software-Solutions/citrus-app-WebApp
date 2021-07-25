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

  set jobOfferStatus(jobofferstatus: _JobOfferStatus) {
    this._jobOfferStatus = jobofferstatus
  }
}
