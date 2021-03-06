export enum _JobOfferStatus {
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

  public setToCanceled(): void {
    if (this.jobOfferStatus === _JobOfferStatus['Canceled']) {
      throw new Error('La oferta ya se encuentra cancelada')
    }
    this._jobOfferStatus = _JobOfferStatus['Canceled']
  }

  public setToPosted(): void {
    this._jobOfferStatus = _JobOfferStatus['Posted']
  }

  public isModifiable(): boolean {
    return Boolean(
      this.jobOfferStatus === _JobOfferStatus['Posted'] ||
        this.jobOfferStatus === _JobOfferStatus['Canceled']
    )
  }

  public setToPublished(): void {
    if (
      this.jobOfferStatus !== _JobOfferStatus['Posted'] &&
      this.jobOfferStatus !== _JobOfferStatus['Canceled']
    ) {
      throw new Error('La oferta ya se encuentra publicada')
    }
    this._jobOfferStatus = _JobOfferStatus['OpenFoAplications']
  }
}
