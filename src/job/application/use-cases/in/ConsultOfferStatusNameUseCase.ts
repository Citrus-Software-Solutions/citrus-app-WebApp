export type OfferStatusNameType =
  | 'Aplicaciones cerradas'
  | 'Asignada'
  | 'Cancelada'
  | 'Finalizada'
  | 'En Progreso'
  | 'Publicada'
  | 'Sin Publicar'

export interface ConsultOfferStatusNameUseCase {
  execute(status: number): OfferStatusNameType
}
