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
        <span class="jobs-form_form_section_info-container">
          <label class="jobs-form_form_section_label" for="state">Estado</label>
          <InputText
            type="text"
            v-model="state"
            name="state"
            required
            placeholder="Distrito Capital"
            class="jobs-form_form_section_input__medium"
          />
        </span>
        <span class="jobs-form_form_section_info-container">
          <label class="jobs-form_form_section_label" for="city">Ciudad</label>
          <InputText
            type="text"
            v-model="city"
            name="city"
            required
            placeholder="Caracas"
            class="jobs-form_form_section_input__medium"
          />
        </span>
        <span class="jobs-form_form_section_info-container__block">
          <label class="jobs-form_form_section_label" for="street1">
            Calle #1
          </label>
          <InputText
            type="text"
            v-model="street1"
            name="street1"
            required
            placeholder=" Avenida Francisco de Miranda"
          />
        </span>
        <span class="jobs-form_form_section_info-container__block">
          <label class="jobs-form_form_section_label" for="street2">
            Calle #2
          </label>
          <InputText
            type="text"
            v-model="street2"
            name="street2"
            required
            placeholder="Urbanización El Rosal, Chacao"
          />
        </span>
        <span class="jobs-form_form_section_info-container__block">
          <label class="jobs-form_form_section_label" for="_zip">
            Codigo Zip
          </label>
          <InputMask
            mask="9999"
            v-model="zip"
            class="jobs-form_form_section_input__small"
            name="_zip"
            required
            placeholder="1060"
          />
        </span>
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
        <label class="jobs-form_form_section_label" for="dead_line">
          Hasta
        </label>
        <Calendar
          id="dead_line"
          v-model="dead_line"
          dateFormat="dd/mm/yy"
          :manualInput="false"
          hourFormat="12"
          required
        />
        <InlineMessage v-if="errors?.dead_line">
          {{ errors.dead_line }}
        </InlineMessage>
      </div>
      <div class="jobs-form_form_section">
        <h2 class="jobs-form_form_section_title">Días de trabajo</h2>
        <label class="jobs-form_form_section_label" for="schedules">
          Seleccionar los horarios de inicio y fin deseados:
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
      <div class="jobs-form_form_section jobs-form_form_section__double-col">
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
            class="jobs-form_form_section_input__small"
            placeholder="20"
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
import { CreateOfferDTOUi } from '@/job/domain/DTO/CreateOfferDto'
import ScheduleList from '../schedule-list/ScheduleList.vue'
import { formatDate } from '../../shared'
import InputMask from 'primevue/inputmask'

export default defineComponent({
  data() {
    return {
      title: !this.formData ? '' : this.formData.title,
      specialRequirements: !this.formData
        ? ''
        : this.formData.specialRequirements,
      schedules: !this.formData
        ? (null as unknown as Date[])
        : this.formData.schedules.map(
            (el: { init_date: string; end_date: string }) => ({
              init_date: new Date(el.init_date),
              end_date: new Date(el.end_date),
            })
          ),
      dead_line: !this.formData
        ? new Date()
        : new Date(this.formData.dead_line),
      hourlyRate: !this.formData
        ? (null as unknown as number)
        : this.formData.hourlyRate,
      duration: !this.formData
        ? (null as unknown as number)
        : this.formData.duration,
      location: !this.formData ? '' : this.formData.location,
      city: !this.formData ? '' : this.formData.location.city,
      state: !this.formData ? '' : this.formData.location.state,
      street1: !this.formData ? '' : this.formData.location.street1,
      street2: !this.formData ? '' : this.formData.location.street2,
      zip: !this.formData ? null : this.formData.location._zip,
      skills: !this.formData
        ? (null as unknown as {
            name: string
            value: string
            category: string
          }[])
        : this.formData.skills.map(
            (el: { name: string; value: string; category: string }) => {
              return { name: el.name, value: el.name, category: el.category }
            }
          ),
      listOfSkills: [
        { name: 'Diseño', value: 'Diseño', category: '1' },
        { name: 'Desarrollo', value: 'Desarrollo', category: '1' },
        { name: 'Limpieza', value: 'Limpieza', category: '1' },
      ],
    }
  },
  methods: {
    handleSubmit(): void {
      // FIXME: Definir como se maneja estatus y el type
      const JobOfferData: CreateOfferDTOUi = {
        title: this.title,
        status: 0,
        dead_line: formatDate(this.dead_line, '-', true) as unknown as Date,
        schedules: this.schedules,
        skills: this.skills?.map((el: any) => ({
          name: el.name,
          category: el.category,
        })),
        specialRequirements: this.specialRequirements,
        duration: this.duration,
        hourlyRate: this.hourlyRate,
        location: {
          city: this.city,
          state: this.state,
          street1: this.street1,
          street2: this.street2,
          _zip: this.zip,
        },
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
    InputMask,
  },
})
</script>

<style lang="scss" src="./JobsForm.module.scss" scoped></style>
