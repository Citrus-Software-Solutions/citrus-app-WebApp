<template>
  <nav class="nav-bar">
    <router-link class="nav-bar_item" to="/#">
      <img
        src="@/common-infrastructure/assets/citrus-logo.jpg"
        alt="citrus"
        class="nav-bar_item_logo"
      />
    </router-link>
    <router-link class="nav-bar_item" to="/app/jobs">
      <i class="pi pi-home nav-bar_item_icons" v-tooltip.right="'Inicio'"></i>
    </router-link>
    <router-link class="nav-bar_item" to="/app/jobs">
      <i
        class="pi pi-briefcase nav-bar_item_icons"
        v-tooltip.right="'Ofertas'"
        v-bind:class="{
          'nav-bar_item_icons__active': $route.path.includes('/app/jobs'),
        }"
      ></i>
    </router-link>
    <router-link class="nav-bar_item" to="/app/profile">
      <i
        class="pi pi-user nav-bar_item_icons"
        v-tooltip.right="'Perfil'"
        v-bind:class="{
          'nav-bar_item_icons__active': $route.path.includes('/app/profile'),
        }"
      ></i>
    </router-link>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({})
</script>
<style lang="scss" src="./Navbar.module.scss" scoped></style>
