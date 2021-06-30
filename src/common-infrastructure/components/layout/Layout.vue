<template>
  <ViewContainer>
    <section class="layout_container">
      <div class="layout_container_controls">
        <Breadcrumb :home="homeBreadCrumbLink" :model="breadCrumbLinks" />
        <slot name="callToAction"></slot>
      </div>
      <div class="layout_container_content">
        <slot name="content"></slot>
      </div>
    </section>
  </ViewContainer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Breadcrumb from 'primevue/breadcrumb'
import ViewContainer from '../view-container/ViewContainer.vue'
import { breadCrumbTypes } from '../../types'

interface LayoutStateTypes {
  homeBreadCrumbLink: breadCrumbTypes
}

export default defineComponent({
  data(): LayoutStateTypes {
    return {
      homeBreadCrumbLink: { label: 'Citrus App', to: '/' },
    }
  },
  props: ['breadCrumbLinks'],
  components: {
    Breadcrumb,
    ViewContainer,
  },
})
</script>

<style scoped lang="scss" src="./Layout.module.scss"></style>
