<template>
  <main class="jobs-details" v-if="details.title">
    <h1 class="jobs-details_title">{{ details.title }}</h1>
    <div class="jobs-details_section">
      <i class="pi pi-calendar jobs-details_section_icon"></i>
      <p class="jobs-details_section_sub-title">Fecha final:</p>
      <p>{{ formatDate(details.deadline) }}</p>
    </div>
    <div class="jobs-details_section">
      <i class="pi pi-map-marker jobs-details_section_icon"></i>
      <p class="jobs-details_section_sub-title">Ubicación:</p>
      <p>{{ details.location.state }}, {{ details.location.city }}</p>
    </div>
    <div class="jobs-details_section">
      <i class="pi pi-money-bill jobs-details_section_icon"></i>
      <p class="jobs-details_section_sub-title">Salario:</p>
      <p>{{ details.hourlyRate }} USD</p>
    </div>
    <div class="jobs-details_section">
      <p class="jobs-details_section_sub-title">Duración:</p>
      <p>{{ details.duration }} horas</p>
    </div>
    <div class="jobs-details_section">
      <p class="jobs-details_section_sub-title">Habilidades requeridas:</p>
      <ul class="jobs-details_section_list" v-if="details.skills">
        <li
          v-for="skill in details.skills"
          :key="skill"
          class="jobs-details_section_list_item"
        >
          {{ skill.name }}
        </li>
      </ul>
    </div>
    <div class="jobs-details_section">
      <p class="jobs-details_section_sub-title">Horarios:</p>
      <ul class="jobs-details_section_list">
        <li
          v-for="schedule in details.schedules"
          :key="schedule"
          class="jobs-details_section_list_item"
        >
          {{
            formatDate(schedule.init_date, true) +
            ' - ' +
            formatDate(schedule.end_date, true)
          }}
        </li>
      </ul>
    </div>
    <div class="jobs-details_section">
      <p class="jobs-details_section_sub-title">Requerimientos especiales:</p>
      <p>{{ details.specialRequirements }}</p>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { RouteParams } from 'vue-router'
import { formatDateWithTime, formatDate } from '../../shared'

export default defineComponent({
  data(): RouteParams {
    return {
      jobId: this.$route.params.id,
    }
  },
  methods: {
    formatDate(date: string, time?: boolean) {
      if (time) {
        return formatDateWithTime(new Date(date))
      }
      return formatDate(new Date(date), '/')
    },
  },
  props: ['details'],
})
</script>
<style lang="scss" src="./JobsDetails.module.scss" scoped></style>
