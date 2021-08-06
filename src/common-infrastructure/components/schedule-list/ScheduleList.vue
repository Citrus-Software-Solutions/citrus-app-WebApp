<template>
  <span class="schedule-list_calendar-container">
    <Calendar
      id="schedules1"
      v-model="schedules.init_date"
      hourFormat="12"
      :showTime="true"
      required
      dateFormat="dd/mm/yy"
      class="schedule-list_calendar"
    />
    -
    <Calendar
      id="schedules2"
      v-model="schedules.end_date"
      hourFormat="12"
      :showTime="true"
      required
      dateFormat="dd/mm/yy"
      class="schedule-list_calendar"
    />
    <Button
      label="Success"
      class="p-button-outlined p-button-success schedule-list_btn__add"
      @click.prevent="handleAddSchedule"
    >
      Agregar
    </Button>
  </span>

  <table class="schedule-list_table" v-if="listOfSchedules.length">
    <thead>
      <tr>
        <th class="schedule-list_cell"></th>
        <th class="schedule-list_cell">Fecha Inicio</th>
        <th class="schedule-list_cell">Hora Inicio</th>
        <th class="schedule-list_cell">Fecha Fin</th>
        <th class="schedule-list_cell">Hora Fin</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="schedule in listOfSchedules" :key="schedule">
        <td>
          <Button
            icon="pi pi-times"
            class="
              p-button-rounded p-button-danger p-button-outlined
              schedule-list_btn__del
            "
            @click="handleRemove(schedule)"
          />
        </td>
        <td class="schedule-list_row">
          {{ formatDate(schedule.init_date) }}
        </td>
        <td class="schedule-list_row">
          {{ formatDate(schedule.init_date, true) }}
        </td>
        <td class="schedule-list_row">
          {{ formatDate(schedule.end_date) }}
        </td>
        <td class="schedule-list_row">
          {{ formatDate(schedule.end_date, true) }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Calendar from 'primevue/calendar'
import Button from 'primevue/button'
import { formatDate, formatTime } from '../../shared'

interface dataType {
  schedules: { init_date: Date; end_date: Date }
  listOfSchedules: any[]
}

export default defineComponent({
  data(): dataType {
    return {
      schedules: { init_date: new Date(), end_date: new Date() },
      listOfSchedules: this.list ? this.list : [],
    }
  },
  emits: ['updSchedules'],
  methods: {
    formatDate(date: string, time?: boolean) {
      if (time) {
        return formatTime(new Date(date))
      }
      return formatDate(new Date(date), '/')
    },
    handleRemove(date: dataType['schedules']): void {
      this.listOfSchedules = this.listOfSchedules.filter(
        (el) => el.init_date !== date.init_date && el.end_date !== date.end_date
      )
      this.$emit('updSchedules', this.listOfSchedules)
    },
    handleAddSchedule(): void {
      this.listOfSchedules = [...this.listOfSchedules, this.schedules]
      this.schedules = { init_date: new Date(), end_date: new Date() }
      this.$emit('updSchedules', this.listOfSchedules)
    },
  },
  components: {
    Calendar,
    Button,
  },
  props: ['list'],
})
</script>
<style lang="scss" src="./ScheduleList.module.scss" scoped></style>
