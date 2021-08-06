<template>
  <Layout :breadCrumbLinks="breadCrumbLinks">
    <template v-slot:content>
      <div class="heading">
        <h3></h3>
        <!---
        <Button
          class="p-button"
          label="Editar"
          icon="pi pi-pencil"
          iconPos="right"
          @click="visible = true"
        />-->
      </div>
      <br />
      <!--side bar de edicion-->
      <Sidebar v-model:visible="visible" :baseZIndex="1000" position="full">
        <h3>Editar Información Personal</h3>
      </Sidebar>

      <div class="layout">
        <!--user profile-->
        <div class="container">
          <Card class="card">
            <template #header>
              <div class="container-center">
                <img
                  alt="user header"
                  class="user-img"
                  src="../assets/user-icon.jpg"
                />
                <div class="container" style="text-align: center">
                  <h2>Usuario</h2>
                  <br />
                  <h3>{{ userInfo.username }}</h3>
                </div>
              </div>
            </template>
            <template #content>
              <h4>{{ employer.company_name }}</h4>
              <div class="container" style="text-align: center">
                <p>
                  <i class="pi pi-envelope" style="font-size: 1em"></i> &nbsp;
                  {{ userInfo.email }}
                </p>
              </div>
            </template>
          </Card>
        </div>
        <!--
        <div class="container" style="display: flex; justify-content: center">
          <Card>
            <template #header> </template>
            <template #content>
              <h3>Requerimientos especiales</h3>
              <p>{{ employer.special_requirements }}</p>
              <hr />
              <h3>Address</h3>
              <p>{{ employer.address.city }}</p>
              <p>{{ employer.address.state }}</p>
              <p>{{ employer.address.zip }}</p>
            </template>
          </Card>
        </div>-->
      </div>
    </template>
  </Layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Layout from '../components/layout/Layout.vue'
import { breadCrumbTypes } from '../types/index'
import Sidebar from 'primevue/sidebar'
import Button from 'primevue/button'
import Card from 'primevue/card'

export default defineComponent({
  data() {
    return {
      breadCrumbLinks: [{ label: 'Perfil', to: '/profile' }],
      //variables
      visible: false,
    }
  },
  components: {
    Layout,
    //Button,
    Card,
    Sidebar,
  },
  computed: {
    employer(): any {
      return this.$store.getters.getEmployer
    },
    userInfo(): any {
      return this.$store.getters.getUser
    },
  },
})
</script>

<style scoped>
.heading {
  display: flex;
  justify-content: space-between;
}

.user-info {
  display: flex;
  justify-content: center;
}
.cover-img {
  background-image: url('../assets/default-banner.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 120px;
}

.profie-image-container {
  text-align: center;
  border-radius: 100%;
  height: 120px;
  width: 120px;
}

.layout {
  display: flex;
  justify-content: space-between;
}
.container {
  margin: 0px 5px;
}
.container-center {
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.user-img {
  width: 200px;
  height: 200px;
  border-radius: 100%;
  text-align: center;
}

.card {
  padding: 20px;
}
</style>
