<template>
  <router-view />
  <Toast />
  <teleport to="#modal">
    <Loading v-if="status.type === 'LOADING'" />
  </teleport>
</template>

<script lang="ts">
import Toast from 'primevue/toast'
import Loading from './components/loading-screen/Loading.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  watch: {
    status(newStatus) {
      if (newStatus.type === 'SUCCESS') {
        this.$toast.add({
          severity: 'success',
          summary: 'La Operación fue Exitosa',
          detail: newStatus.message,
          life: 5000,
        })
      } else if (newStatus.type === 'ERROR') {
        this.$toast.add({
          severity: 'error',
          summary: 'La operación Falló',
          detail: newStatus.message,
          life: 5000,
        })
      }
    },
  },
  computed: {
    status(): any {
      return this.$store.getters.getOperationStatus
    },
  },
  components: {
    Toast,
    Loading,
  },
})
</script>

<style lang="css" src="./styles/index.css"></style>
