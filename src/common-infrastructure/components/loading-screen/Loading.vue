<template>
  <div class="loading">
    <div class="loading_container">
      <ProgressSpinner class="loading_container_spinner" />
      <p class="loading_container_text">Cargando...</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ProgressSpinner from 'primevue/progressspinner'

export default defineComponent({
  components: {
    ProgressSpinner,
  },
})
</script>
<style lang="scss" src="./Loading.module.scss" scoped></style>
