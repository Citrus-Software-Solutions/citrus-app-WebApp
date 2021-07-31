<template>
  <router-link
    :to="{ name: 'JobDetails', params: { id: id } }"
    class="jobs-card"
  >
    <img src="../../assets/citrus-logo.jpg" alt="" class="jobs-card_img" />
    <div class="jobs-card_content">
      <h1 class="jobs-card_content_title">{{ title }}</h1>
      <p class="jobs-card_content_description">{{ specialRequirements }}</p>
      <Tag v-if="applicants">{{ applicants }} Aplicantes</Tag>
      <Tag v-if="status">{{ status }}</Tag>
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
import Tag from '../tag/Tag.vue'
import { ref } from 'vue'
import router from '@/common-infrastructure/router'

export default defineComponent({
  props: {
    id: String,
    title: String,
    specialRequirements: String,
    applicants: String,
    status: String,
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
        icon: 'pi pi-copy',
        command: () => {
          context.emit('suspendOffer', props.id)
        },
      },
      {
        label: 'Publicar',
        icon: 'pi pi-copy',
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
    Tag,
    Menu,
  },
})
</script>

<style lang="scss" src="./JobsCard.module.scss" scoped></style>
