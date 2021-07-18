export interface UpdateStatusPort {
  error(): void
  inProgress(): void
  success(): void
  idle(): void
}
