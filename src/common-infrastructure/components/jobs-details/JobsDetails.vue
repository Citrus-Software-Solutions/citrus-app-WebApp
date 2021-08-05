<template>
  <header class="jobs-details_header" v-if="details.title">
    <img :src="image" alt="header-bg" class="jobs-details_header_img" />
    <div class="jobs-details_header_content">
      <h1 class="jobs-details_header_title">{{ details.title }}</h1>
      <div class="jobs-details_header_content--details">
        <ul class="jobs-details_header_list" v-if="details.skills">
          <li
            v-for="skill in details.skills"
            :key="skill"
            class="jobs-details_header_list_item"
          >
            {{ skill.name }}
          </li>
        </ul>
        <p v-if="details.dead_line" style="margin-left: auto">
          <i class="pi pi-clock jobs-details_header_content_icon" />
          {{ formatDate(details.dead_line) }}
        </p>
      </div>
    </div>
  </header>
  <div class="jobs-details_info-container">
    <section class="jobs-details__job" v-if="details.title">
      <p class="jobs-details_section-title">Información de oferta</p>
      <div class="jobs-details_section">
        <p class="jobs-details_section_sub-title">Ubicación:</p>
        <p class="jobs-details_section_text">
          {{ details.location.state }}, {{ details.location.city }}
        </p>
      </div>
      <div class="jobs-details_section">
        <p class="jobs-details_section_sub-title">Salario:</p>
        <p class="jobs-details_section_text">{{ details.hourlyRate }} USD</p>
      </div>
      <div class="jobs-details_section">
        <p class="jobs-details_section_sub-title">Duración:</p>
        <p class="jobs-details_section_text">{{ details.duration }} horas</p>
      </div>
      <div class="jobs-details_section">
        <p class="jobs-details_section_sub-title">Horarios:</p>
        <table class="jobs-details_section_table">
          <thead>
            <tr>
              <th class="jobs-details_section_cell">Fecha Inicio</th>
              <th class="jobs-details_section_cell">Hora Inicio</th>
              <th class="jobs-details_section_cell">Fecha Fin</th>
              <th class="jobs-details_section_cell">Hora Fin</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="schedule in details.schedules" :key="schedule">
              <td class="jobs-details_section_row">
                {{ formatDate(schedule.init_date) }}
              </td>
              <td class="jobs-details_section_row">
                {{ formatDate(schedule.init_date, true) }}
              </td>
              <td class="jobs-details_section_row">
                {{ formatDate(schedule.end_date) }}
              </td>
              <td class="jobs-details_section_row">
                {{ formatDate(schedule.end_date, true) }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="jobs-details_section">
        <p class="jobs-details_section_sub-title">Requerimientos especiales:</p>
        <p class="jobs-details_section_text">
          {{ details.specialRequirements }}
        </p>
      </div>
    </section>
    <section
      class="jobs-details__employee"
      v-if="details?.employee?.first_name"
    >
      <p class="jobs-details_section-title">Información de empleado</p>
      <div class="jobs-details_section">
        <p class="jobs-details_section_sub-title">Nombre:</p>
        <p class="jobs-details_section_text">
          {{
            `${details.employee.first_name} ${details.employee.middle_name} ${details.employee.last_name}`
          }}
        </p>
      </div>
      <div class="jobs-details_section">
        <p class="jobs-details_section_sub-title">Fecha de nacimiento:</p>
        <p class="jobs-details_section_text">
          {{ formatDate(new Date(details.employee.birth_date)) }}
        </p>
      </div>
      <div class="jobs-details_section">
        <p class="jobs-details_section_sub-title">SSN:</p>
        <p class="jobs-details_section_text">
          {{ details.employee.ssn }}
        </p>
      </div>
      <div class="jobs-details_section">
        <p class="jobs-details_section_sub-title">Teléfono:</p>
        <p class="jobs-details_section_text">
          {{ details.employee.phone_number }}
        </p>
      </div>
      <div class="jobs-details_section">
        <p class="jobs-details_section_sub-title">Dirección:</p>
        <p class="jobs-details_section_text">
          {{
            `${details.employee.address.state}, ${details.employee.address.city} ${details.employee.address.street1}`
          }}
        </p>
      </div>
      <div class="jobs-details_section">
        <p class="jobs-details_section_sub-title">Habilidades:</p>
        <ul class="jobs-details_header_list" v-if="details.employee.skills">
          <li
            v-for="skill in details.employee.skills"
            :key="skill"
            class="jobs-details_header_list_item"
          >
            {{ skill.name }}
          </li>
        </ul>
      </div>
      <div class="jobs-details_section">
        <p class="jobs-details_section_sub-title">Valoración:</p>
        <p class="jobs-details_section_text">
          <i class="pi pi-star jobs-details_header_content_icon" />
          {{ details.employee.rating }}
        </p>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { RouteParams } from 'vue-router'
import { formatDate, formatTime } from '../../shared'

export default defineComponent({
  data(): RouteParams {
    return {
      jobId: this.$route.params.id,
      image: `https://picsum.photos/1200/200?random=${new Date()}`,
    }
  },
  methods: {
    formatDate(date: string, time?: boolean) {
      if (time) {
        return formatTime(new Date(date))
      }
      return formatDate(new Date(date), '/')
    },
  },
  props: ['details'],
})
</script>
<style lang="scss" src="./JobsDetails.module.scss" scoped></style>
