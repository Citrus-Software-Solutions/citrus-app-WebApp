<template>
  <main class="jobs-form">
    <form @submit.prevent="handleSubmit" class="jobs-form_form">
      <div class="jobs-form_form_section">
        <h2 class="jobs-form_form_section_title">Título del trabajo</h2>
        <InputText
          type="text"
          v-model="name"
          name="name"
          required
          placeholder="Obreros para construcción"
        />
        <InlineMessage v-if="errors?.name">
          {{ errors.name }}
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
        <h2 class="jobs-form_form_section_title">Descripción</h2>
        <Textarea
          v-model="description"
          :autoResize="true"
          rows="5"
          cols="30"
          name="description"
          required
          placeholder="Cuéntanos todos los detalles del trabajo"
        />
        <InlineMessage v-if="errors?.description">
          {{ errors.description }}
        </InlineMessage>
      </div>
      <div class="jobs-form_form_section">
        <h2 class="jobs-form_form_section_title">Duración del trabajo</h2>
        <label class="jobs-form_form_section_label" for="date_begin">
          Desde
        </label>
        <Calendar
          id="date_begin"
          v-model="date_begin"
          dateFormat="dd/mm/yy"
          class="jobs-form_form_section_input__medium"
          placeholder="- / - / -"
          :manualInput="false"
          required
        />
        <InlineMessage v-if="errors?.date_begin">
          {{ errors.date_begin }}
        </InlineMessage>
        <label class="jobs-form_form_section_label" for="date_end">Hasta</label>
        <Calendar
          id="date_end"
          v-model="date_end"
          dateFormat="dd/mm/yy"
          class="jobs-form_form_section_input__medium"
          placeholder="- / - / -"
          :manualInput="false"
          required
        />
        <InlineMessage v-if="errors?.date_end">
          {{ errors.date_end }}
        </InlineMessage>
      </div>
      <div class="jobs-form_form_section">
        <h2 class="jobs-form_form_section_title">Género del empleado</h2>
        <RadioButton
          id="femenine"
          name="gender"
          value="f"
          v-model="gender"
          required
        />
        <label class="jobs-form_form_section_label" for="femenine">
          Femenino
        </label>
        <RadioButton
          id="masculine"
          name="gender"
          value="m"
          v-model="gender"
          required
        />
        <label class="jobs-form_form_section_label" for="masculine">
          Masculino
        </label>
        <InlineMessage v-if="errors?.gender">
          {{ errors.gender }}
        </InlineMessage>
      </div>
      <div class="jobs-form_form_section">
        <h2 class="jobs-form_form_section_title">Rango de Edad</h2>
        <label class="jobs-form_form_section_label" for="min_age">
          Edad mínima
        </label>
        <InputNumber
          name="min_age"
          v-model="min_age"
          :min="0"
          :max="100"
          required
          class="jobs-form_form_section_input__small"
          placeholder="min"
        />
        <InlineMessage v-if="errors?.min_age">
          {{ errors.min_age }}
        </InlineMessage>
        <label class="jobs-form_form_section_label" for="max_age">
          Edad máxima
        </label>
        <InputNumber
          name="max_age"
          v-model="max_age"
          :min="0"
          :max="100"
          required
          class="jobs-form_form_section_input__small"
          placeholder="max"
        />
        <InlineMessage v-if="errors?.max_age">
          {{ errors.max_age }}
        </InlineMessage>
      </div>
      <div class="jobs-form_form_section jobs-form_form_section__double-row">
        <div>
          <h2 class="jobs-form_form_section_title">Salario</h2>
          <label class="jobs-form_form_section_label" for="salary">
            Cantidad
          </label>
          <InputNumber
            name="salary"
            v-model="salary"
            :min="0"
            required
            class="jobs-form_form_section_input__medium"
            placeholder="1.000.000"
          />
          <InlineMessage v-if="errors?.salary">
            {{ errors.salary }}
          </InlineMessage>
        </div>
        <div>
          <h2 class="jobs-form_form_section_title">Vacantes disponibles</h2>
          <label class="jobs-form_form_section_label" for="available_vacans">
            Núm. de personas
          </label>
          <InputNumber
            name="available_vacans"
            v-model="available_vacans"
            :min="0"
            required
            class="jobs-form_form_section_input__small"
            placeholder="5"
          />
          <InlineMessage v-if="errors?.available_vacans">
            {{ errors.available_vacans }}
          </InlineMessage>
        </div>
      </div>
      <Button
        type="submit"
        label="Agregar Oferta"
        icon="pi pi-plus"
        class="jobs-form_form_btn"
      />
    </form>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Calendar from 'primevue/calendar'
import RadioButton from 'primevue/radiobutton'
import InputNumber from 'primevue/inputnumber'
import InputText from 'primevue/inputtext'
import Textarea from 'primevue/textarea'
import Button from 'primevue/button'
import InlineMessage from 'primevue/inlinemessage'
import { JobOffer } from '@/job-offer/domain/model/JobOffer'

export default defineComponent({
  data() {
    return {
      name: '',
      description: '',
      date_begin: new Date(),
      date_end: new Date(),
      gender: '',
      min_age: null as unknown as number,
      max_age: null as unknown as number,
      salary: null as unknown as number,
      available_vacans: null as unknown as number,
      location: '',
    }
  },
  methods: {
    handleSubmit(): void {
      const JobOfferData: JobOffer = {
        name: this.name,
        description: this.description,
        date_begin: this.date_begin,
        date_end: this.date_end,
        gender: this.gender,
        min_age: this.min_age,
        max_age: this.max_age,
        salary: this.salary,
        available_vacans: this.available_vacans,
        status: 'abierto',
        location: {
          id: '202020',
          name: this.location,
          type: 'Specific Direction',
        },
        employer: this.user,
      }

      this.$emit('postJob', JobOfferData)
    },
  },
  props: ['errors', 'user'],
  components: {
    Calendar,
    RadioButton,
    InputNumber,
    InputText,
    Textarea,
    Button,
    InlineMessage,
  },
})
</script>

<style lang="scss" src="./JobsForm.module.scss" scoped></style>
