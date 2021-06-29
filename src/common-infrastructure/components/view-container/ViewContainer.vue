<template>
  <main class="view-container">
    <div class="view-container_side__left">
      <Navbar />
    </div>
    <div class="view-container_side__right">
      <slot></slot>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Navbar from '../navbar/Navbar.vue'
export default defineComponent({
  components: {
    Navbar,
  },
})
</script>

<style lang="scss" src="./ViewContainer.module.scss" scoped></style>
