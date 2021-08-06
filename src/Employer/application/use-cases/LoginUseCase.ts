export interface LoginUseCase {
  execute(payload: { username: string; password: string }): void
}
