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
      </div>
      <div class="jobs-form_form_section">
        <h2 class="jobs-form_form_section_title">Duración del trabajo</h2>
        <label class="jobs-form_form_section_label" for="start_date">
          Desde
        </label>
        <Calendar
          id="start_date"
          v-model="start_date"
          dateFormat="dd/mm/yy"
          class="jobs-form_form_section_input__medium"
          placeholder="- / - / -"
          :manualInput="false"
          required
        />
        <label class="jobs-form_form_section_label" for="end_date">Hasta</label>
        <Calendar
          id="end_date"
          v-model="end_date"
          dateFormat="dd/mm/yy"
          class="jobs-form_form_section_input__medium"
          placeholder="- / - / -"
          :manualInput="false"
          required
        />
      </div>
      <div class="jobs-form_form_section">
        <h2 class="jobs-form_form_section_title">Género del empleado</h2>
        <RadioButton
          id="femenine"
          name="sex"
          value="femenino"
          v-model="sex"
          required
        />
        <label class="jobs-form_form_section_label" for="femenine">
          Femenino
        </label>
        <RadioButton
          id="masculine"
          name="sex"
          value="masculino"
          v-model="sex"
          required
        />
        <label class="jobs-form_form_section_label" for="masculine">
          Masculino
        </label>
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
        </div>
        <div>
          <h2 class="jobs-form_form_section_title">Vacantes disponibles</h2>
          <label class="jobs-form_form_section_label" for="vacancy">
            Núm. de personas
          </label>
          <InputNumber
            name="vacancy"
            v-model="vacancy"
            :min="0"
            required
            class="jobs-form_form_section_input__small"
            placeholder="5"
          />
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

interface formTypes {
  title: string
  description: string
  start_date: Date | null
  end_date: Date | null
  sex: string
  min_age: number | null
  max_age: number | null
  salary: number | null
  vacancy: number | null
}

export default defineComponent({
  data(): formTypes {
    return {
      title: '',
      description: '',
      start_date: null,
      end_date: null,
      sex: '',
      min_age: null,
      max_age: null,
      salary: null,
      vacancy: null,
    }
  },
  methods: {
    yearFormatter(date: Date): string {
      return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
    },
    handleSubmit(): void {
      console.log({
        title: this.title,
        description: this.description,
        start_date: this.yearFormatter(this.start_date as Date),
        end_date: this.yearFormatter(this.end_date as Date),
        sex: this.sex,
        min_age: this.min_age,
        max_age: this.max_age,
        salary: this.salary,
        vacancy: this.vacancy,
      })
    },
  },
  components: {
    Calendar,
    RadioButton,
    InputNumber,
    InputText,
    Textarea,
    Button,
  },
})
</script>

<style lang="scss" src="./JobsForm.module.scss" scoped></style>
