export class PostOfferService implements PostOfferUseCase {
  PostOffer(offer: any): any {
    console.log(process.env.VUE_APP_CITRUS_BASE_URL)
    return offer
  }
}
