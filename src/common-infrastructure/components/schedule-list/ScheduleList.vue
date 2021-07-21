<template>
  <Calendar
    id="schedules"
    v-model="schedules"
    :manualInput="false"
    hourFormat="12"
    :showTime="true"
    required
    dateFormat="dd/mm/yy"
  />
  <Button
    label="Success"
    class="p-button-outlined p-button-success schedule-list_btn__add"
    @click.prevent="handleAddSchedule"
  >
    Agregar Fecha
  </Button>
  <ul class="schedule-list_list">
    <li
      v-for="schedule in listOfSchedules"
      :key="schedule"
      class="schedule-list_list_item"
    >
      <Button
        icon="pi pi-times"
        class="
          p-button-rounded p-button-danger p-button-outlined
          schedule-list_btn__del
        "
        @click="handleRemove(schedule)"
      />
      {{ formatDate(schedule) }}
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Calendar from 'primevue/calendar'
import Button from 'primevue/button'
import { formatDateWithTime } from '../../shared'

interface dataType {
  schedules: Date | null
  listOfSchedules: any[]
}

export default defineComponent({
  data(): dataType {
    return {
      schedules: new Date(),
      listOfSchedules: this.list ? this.list : [],
    }
  },
  emits: ['updSchedules'],
  methods: {
    formatDate(date: Date): string {
      return formatDateWithTime(date)
    },
    handleRemove(date: Date): void {
      this.listOfSchedules = this.listOfSchedules.filter((el) => el !== date)
      this.$emit('updSchedules', this.listOfSchedules)
    },
    handleAddSchedule(): void {
      this.listOfSchedules = [...this.listOfSchedules, this.schedules]
      this.schedules = new Date()
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
