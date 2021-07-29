export function formatTime(date: Date): string {
  let hours = date.getHours()
  let minutes: number | string = date.getMinutes()
  const ampm = hours >= 12 ? 'PM' : 'AM'
  hours = hours % 12
  hours = hours ? hours : 12
  minutes = minutes < 10 ? '0' + minutes : minutes
  const strTime = hours + ':' + minutes + ' ' + ampm
  return strTime
}

export function formatDate(
  date: Date,
  separator: string,
  reversed?: boolean
): string {
  const day = date.getDate()
  const month = date.getMonth() + 1
  const year = date.getFullYear()
  if (reversed) {
    return `${year}${separator}${month}${separator}${day}`
  }
  return `${day}${separator}${month}${separator}${year}`
}

export function formatDateWithTime(date: Date): string {
  const formatedDate = formatDate(date, '/')
  return `Fecha: ${formatedDate}, Hora: ${formatTime(date)}`
}
