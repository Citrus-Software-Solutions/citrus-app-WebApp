export interface LoginPort {
  requestHandler(payload: { username: string; password: string }): Promise<any>
  requestEmployer(employer_id: number): Promise<any>
  requestUser(id: number): Promise<any>
}
