<template>
  <main class="jobs-form">
    <form @submit.prevent="handleSubmit" class="jobs-form_form">
      <div class="jobs-form_form_section">
        <h2 class="jobs-form_form_section_title">Título del trabajo</h2>
        <InputText
          type="text"
          v-model="title"
          name="title"
          required
          placeholder="Obreros para construcción"
        />
        <InlineMessage v-if="errors?.title">
          {{ errors.title }}
        </InlineMessage>
      </div>
      <div class="jobs-form_form_section">
        <h2 class="jobs-form_form_section_title">Ubicación</h2>
        <InputText
          type="text"
          v-model="location"
          name="location"
          required
          placeholder="Caracas - Venezuela"
        />
        <InlineMessage v-if="errors?.location">
          {{ errors.location }}
        </InlineMessage>
      </div>
      <div class="jobs-form_form_section">
        <h2 class="jobs-form_form_section_title">Requerimientos Especiales</h2>
        <Textarea
          v-model="specialRequirements"
          :autoResize="true"
          rows="5"
          cols="30"
          name="specialRequirements"
          required
          placeholder="Cuéntanos todos los detalles del trabajo"
        />
        <InlineMessage v-if="errors?.specialRequirements">
          {{ errors.specialRequirements }}
        </InlineMessage>
      </div>
      <div class="jobs-form_form_section">
        <h2 class="jobs-form_form_section_title">
          Fecha de cierre de la oferta
        </h2>
        <label class="jobs-form_form_section_label" for="deadline">Hasta</label>
        <Calendar
          id="deadline"
          v-model="deadline"
          dateFormat="dd/mm/yy"
          :manualInput="false"
          hourFormat="12"
          required
        />
        <InlineMessage v-if="errors?.deadline">
          {{ errors.deadline }}
        </InlineMessage>
      </div>
      <div class="jobs-form_form_section">
        <h2 class="jobs-form_form_section_title">Días de trabajo</h2>
        <label class="jobs-form_form_section_label" for="schedules">
          Seleccionar:
        </label>
        <ScheduleList
          @updSchedules="updateSchedules"
          id="schedules"
          :list="schedules"
        />
        <InlineMessage v-if="errors?.schedules">
          {{ errors.schedules }}
        </InlineMessage>
      </div>
      <div class="jobs-form_form_section">
        <h2 class="jobs-form_form_section_title">Habilidades que buscas</h2>
        <label class="jobs-form_form_section_label" for="skills">
          Seleccionar:
        </label>
        <MultiSelect
          v-model="skills"
          :options="listOfSkills"
          optionLabel="name"
          placeholder="Selecciona las habilidades que buscas"
          display="chip"
          name="skills"
          :loading="false"
        />
        <InlineMessage v-if="errors?.skills">
          {{ errors.skills }}
        </InlineMessage>
      </div>
      <div class="jobs-form_form_section">
        <h2 class="jobs-form_form_section_title">Certificados requeridos</h2>
        <label class="jobs-form_form_section_label" for="skills">
          Seleccionar:
        </label>
        <MultiSelect
          v-model="certifications"
          :options="listOfCertifications"
          optionLabel="name"
          placeholder="Selecciona los certificados necesarios"
          display="chip"
          name="skills"
          :loading="false"
        />
        <InlineMessage v-if="errors?.skills">
          {{ errors.schedules }}
        </InlineMessage>
      </div>
      <div class="jobs-form_form_section jobs-form_form_section__double-row">
        <div>
          <h2 class="jobs-form_form_section_title">Salario por hora</h2>
          <label class="jobs-form_form_section_label" for="hourlyRate">
            Cantidad
          </label>
          <InputNumber
            name="hourlyRate"
            v-model="hourlyRate"
            :min="0"
            required
            class="jobs-form_form_section_input__medium"
            placeholder="1.000.000"
          />
          <InlineMessage v-if="errors?.hourlyRate">
            {{ errors.hourlyRate }}
          </InlineMessage>
        </div>
        <div>
          <h2 class="jobs-form_form_section_title">Duración del trabajo</h2>
          <label class="jobs-form_form_section_label" for="duration">
            Total de horas
          </label>
          <InputNumber
            name="duration"
            v-model="duration"
            :min="0"
            required
            class="jobs-form_form_section_input__small"
            placeholder="5"
          />
          <InlineMessage v-if="errors?.duration">
            {{ errors.duration }}
          </InlineMessage>
        </div>
      </div>
      <Button
        type="submit"
        :label="btn"
        icon="pi pi-plus"
        class="jobs-form_form_btn"
      />
    </form>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Calendar from 'primevue/calendar'
import MultiSelect from 'primevue/multiselect'
import InputNumber from 'primevue/inputnumber'
import InputText from 'primevue/inputtext'
import Textarea from 'primevue/textarea'
import Button from 'primevue/button'
import InlineMessage from 'primevue/inlinemessage'
import { CreateOfferDTO } from '@/job/domain/DTO/CreateOfferDto'
import ScheduleList from '../schedule-list/ScheduleList.vue'

export default defineComponent({
  data() {
    return {
      title: !this.formData ? '' : this.formData.title,
      specialRequirements: !this.formData
        ? ''
        : this.formData.specialRequirements,
      schedules: !this.formData
        ? (null as unknown as Date[])
        : this.formData.schedules.map((el: string) => new Date(el)),
      deadline: !this.formData ? new Date() : new Date(this.formData.deadline),
      hourlyRate: !this.formData
        ? (null as unknown as number)
        : this.formData.hourlyRate,
      duration: !this.formData
        ? (null as unknown as number)
        : this.formData.duration,
      location: !this.formData ? '' : this.formData.location.name,
      skills: !this.formData
        ? (null as unknown as { name: string; value: string }[])
        : this.formData.skills.map((el: string) => {
            return { name: el, value: el }
          }),
      certifications: !this.formData
        ? (null as unknown as { name: string; value: string }[])
        : this.formData.certifications.map((el: string) => {
            return { name: el, value: el }
          }),
      listOfCertifications: [
        { name: 'Experto en diseño', value: 'Experto en diseño' },
        { name: 'Manejo de UX', value: 'Manejo de UX' },
        { name: 'Manejo de Tiempo', value: 'Manejo de Tiempo' },
      ],
      listOfSkills: [
        { name: 'Diseño', value: 'Diseño' },
        { name: 'Desarrollo', value: 'Desarrollo' },
        { name: 'Limpieza', value: 'Limpieza' },
        { name: 'Trabajo en equipo', value: 'Trabajo en equipo' },
      ],
    }
  },
  methods: {
    handleSubmit(): void {
      // FIXME: Definir como se maneja estatus
      const JobOfferData: CreateOfferDTO = {
        title: this.title,
        status: 0,
        deadline: this.deadline,
        schedules: this.schedules,
        skills: this.skills.map((el: any) => el.name),
        specialRequirements: this.specialRequirements,
        certifications: this.certifications.map((el: any) => el.name),
        duration: this.duration,
        hourlyRate: this.hourlyRate,
        location: {
          //TODO: definir esto
          id: '202020',
          name: this.location,
          type: 'Specific Direction',
        },
        employer: this.user,
      }

      this.$emit('submitHandler', JobOfferData)
    },
    updateSchedules(schedules: Date[]) {
      this.schedules = schedules
    },
  },
  emits: ['submitHandler'],
  props: ['errors', 'user', 'offer', 'btn', 'formData'],
  components: {
    Calendar,
    MultiSelect,
    InputNumber,
    InputText,
    Textarea,
    Button,
    InlineMessage,
    ScheduleList,
  },
})
</script>

<style lang="scss" src="./JobsForm.module.scss" scoped></style>
