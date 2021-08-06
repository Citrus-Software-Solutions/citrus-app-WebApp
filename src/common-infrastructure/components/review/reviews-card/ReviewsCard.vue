<template>
  <router-link
    :to="{ name: 'JobDetails', params: { id: id } }"
    class="jobs-card"
  >
    <img src="../../../assets/citrus-logo.jpg" alt="" class="jobs-card_img" />
    <div class="jobs-card_content">
      <h1 class="jobs-card_content_title">{{ employeeName }}</h1>
      <!-- <li v-for=""> -->
      <p class="jobs-card_content_description">PRUEBA</p>
      <!-- </li> -->
    </div>
    <span>
      <i
        type="button"
        class="pi pi-angle-down jobs-card_icon"
        @click.prevent="toggle"
        label="Toggle"
      />
      <Menu id="overlay_menu" ref="menu" :model="items" :popup="true" />
    </span>
  </router-link>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Menu from 'primevue/menu'
import { ref } from 'vue'
import router from '@/common-infrastructure/router'
import { ConsultOfferStatusNameFactory } from '@/job/infrastructure/factories/ConsultOfferStatusNameFactory'

export default defineComponent({
  props: {
    id: String,
    questions: [],
    scores: [],
    totalScore: [],
    employeeName: String,
    employeeLastname: String,
    employerName: String,
    jobTitle: String,
  },
  methods: {
    consultStatus(status: number) {
      const consultOfferStatusNameFactory = new ConsultOfferStatusNameFactory()
      return consultOfferStatusNameFactory.create(status)
    },
    isJobDone(status: number) {
      if (this.consultStatus(status) == 'Finalizada') {
        return true
      }
    },
  },
  emits: ['deleteOffer', 'duplicateOffer', 'suspendOffer', 'publishOffer'],
  setup(props, context) {
    const menu = ref()
    const items = ref([
      {
        label: 'Eliminar',
        icon: 'pi pi-trash',
        command: () => {
          context.emit('deleteOffer', props.id)
        },
      },
      {
        label: 'Modificar',
        icon: 'pi pi-pencil',
        command: () => {
          router.push('/app/jobs/modify/' + props.id)
        },
      },
      {
        label: 'Duplicar',
        icon: 'pi pi-copy',
        command: () => {
          context.emit('duplicateOffer', props.id)
        },
      },
      {
        label: 'Suspender',
        icon: 'pi pi-minus-circle',
        command: () => {
          context.emit('suspendOffer', props.id)
        },
      },
      {
        label: 'Publicar',
        icon: 'pi pi-send',
        command: () => {
          context.emit('publishOffer', props.id)
        },
      },
    ])

    const toggle = (event: any) => {
      menu.value.toggle(event)
    }

    return { items, menu, toggle }
  },
  components: {
    Menu,
  },
})
</script>

<style
  lang="scss"
  src="@/common-infrastructure/components/jobs-card/JobsCard.module.scss"
  scoped
></style>
