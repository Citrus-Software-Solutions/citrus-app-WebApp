export interface UpdateStatusPort {
  error(msg?: string): void
  inProgress(): void
  success(msg?: string): void
  idle(): void
}
