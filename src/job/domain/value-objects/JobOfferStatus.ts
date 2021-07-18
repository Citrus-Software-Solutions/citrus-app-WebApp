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
  jobofferStatus: _JobOfferStatus
  constructor(jobofferstatus: _JobOfferStatus) {
    this.jobofferStatus = jobofferstatus
  }

  get jobOfferStatus() {
    return this.jobofferStatus
  }
}
