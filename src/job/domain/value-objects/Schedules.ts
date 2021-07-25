export interface _Schedule {
  init_date: Date
  end_date: Date
}

export type _Schedules = Array<_Schedule>

export class Schedules {
  private _dates: _Schedules
  constructor(props: _Schedules) {
    this._dates = props
  }

  get dates(): _Schedules {
    return this._dates
  }

  set dates(newSchedule: _Schedules) {
    this._dates = newSchedule
  }

  public addDate(init_date: Date, end_date: Date): void {
    const dateNow = new Date()
    const newSchedule = { init_date: init_date, end_date: end_date }
    if (init_date < end_date && init_date >= dateNow) {
      for (const value of this.dates) {
        if (init_date == value.init_date && end_date == value.end_date) {
          throw new Error('Las fechas ya se encuentran agendadas')
        }
        this.dates.push(newSchedule)
      }
    } else if (init_date == null || end_date == null) {
      throw new Error('Las fechas no pueden estar vacias')
    }
  }
}
