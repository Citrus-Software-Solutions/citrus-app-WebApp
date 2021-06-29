<template>
  <router-link
    :to="{ name: 'JobDetails', params: { id: id } }"
    class="jobs-card"
  >
    <img src="../../assets/citrus-logo.jpg" alt="" class="jobs-card_img" />
    <div class="jobs-card_content">
      <h1 class="jobs-card_content_title">{{ name }}</h1>
      <p class="jobs-card_content_description">{{ description }}</p>
      <Tag v-if="applicants">{{ applicants }} Aplicantes</Tag>
      <Tag v-if="status">{{ status }}</Tag>
    </div>
  </router-link>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Tag from '../tag/Tag.vue'

export default defineComponent({
  props: {
    id: String,
    name: String,
    description: String,
    applicants: String,
    status: String,
  },
  components: {
    Tag,
  },
})
</script>

<style lang="scss" src="./JobsCard.module.scss" scoped></style>
