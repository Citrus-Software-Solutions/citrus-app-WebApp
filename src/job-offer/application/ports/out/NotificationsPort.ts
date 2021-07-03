export interface NotificationsPort<T> {
  notificationHandler(object: T): void
}
