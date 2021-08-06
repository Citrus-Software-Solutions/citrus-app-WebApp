<template>
  <div class="landing">
    <!--side bars de registro y login-->

    <!--singup-->
    <Sidebar
      v-model:visible="visibleSingUp"
      :baseZIndex="1000"
      position="right"
      class="register-sidebar"
    >
      <div class="card register_content">
        <h2>Registro</h2>
        <br />
        <h3 class="reg_title">Datos de usuario</h3>
        <br />
        <div class="p-fluid">
          <div class="p-field">
            <label for="user_text">Nombre de usuario</label>
            &nbsp;
            <InputText
              id="user_text"
              type="text"
              v-model="singup_body.username"
            />
          </div>
          <div class="p-field">
            <label for="email">Correo electrónico</label>
            &nbsp;
            <InputText id="email" type="text" v-model="singup_body.email" />
          </div>
          <div class="p-field">
            <label for="pwd_singup">Contraseña</label>
            &nbsp;
            <Password id="pwd_singup" v-model="singup_body.password">
              <template #header>
                <h6>Escoge una contraseña</h6>
              </template>
              <template #footer>
                <Divider />
                <p class="p-mt-2">Sugerencias</p>
                <ul class="p-pl-2 p-ml-2 p-mt-0" style="line-height: 1.5">
                  <li>Al menos un caracter minuscula</li>
                  <li>Al menos un caracter mayúscula</li>
                  <li>Al menos un caracter numerico</li>
                  <li>Al menos un caracter especial</li>
                  <li>Mínimo 8 carácteres</li>
                </ul>
              </template>
            </Password>
          </div>
        </div>
        <br />
        <h3 class="reg_title">Dirección</h3>
        <br />
        <div class="p-fluid">
          <div class="p-field">
            <label for="street_1">Calle 1</label>
            &nbsp;
            <InputText
              id="street_1"
              type="text"
              v-model="singup_body.street1"
            />
          </div>
          <div class="p-field">
            <label for="street_2">Calle 2</label>
            &nbsp;
            <InputText
              id="street_2"
              type="text"
              v-model="singup_body.street2"
            />
          </div>
          <div class="p-field">
            <label for="city">Ciudad</label>
            &nbsp;
            <InputText id="city" type="text" v-model="singup_body.city" />
          </div>
          <div class="p-field">
            <label for="state">Estado</label>
            &nbsp;
            <InputText id="state" type="text" v-model="singup_body.state" />
          </div>
          <div class="p-field">
            <label for="zip">Zip</label>
            &nbsp;
            <InputText id="zip" type="text" v-model="singup_body.zip" />
          </div>
        </div>
        <br />
        <h3 class="reg_title">Datos de la compañía</h3>
        <br />
        <div class="p-field">
          <label for="company_name">Nombre de la compañía</label>
          &nbsp;
          <InputText
            id="company_name"
            type="text"
            v-model="singup_body.company_name"
          />
        </div>
        <br />
        <div class="p-field">
          <label for="requeriments">Requerimientos especiales</label>
          &nbsp;
          <Textarea
            id="requirements"
            type="text"
            v-model="singup_body.special_requirements"
          />
        </div>
        <br />
        <div class="p-grid p-jc-center">
          <div class="p-col-4">
            <Button
              class="p-button reg_button"
              label="Registrar usuario"
              @click="SingUp(singup_body)"
            />
          </div>
        </div>
      </div>
    </Sidebar>
    <!--login-->
    <Sidebar
      v-model:visible="visibleLogin"
      :baseZIndex="1000"
      position="right"
      class="p-sidebar-m"
    >
      <Card>
        <template #title> Login </template>
        <template #content>
          <br />
          <div class="login_form">
            <div class="container" style="padding: 15px">
              <div class="p-grid p-fluid">
                <div class="p-col-12 p-md-12">
                  <div class="p-inputgroup">
                    <span class="p-inputgroup-addon p-button"
                      ><i class="pi pi-user" style="font-size: 1em"></i>
                    </span>
                    <InputText
                      placeholder="Nombre de usuario"
                      v-model="user_auth.username"
                    />
                  </div>
                </div>
                <br />
                <div class="p-col-12 p-md-12">
                  <div class="p-inputgroup">
                    <span class="p-inputgroup-addon p-button">
                      <i class="pi pi-key" style="font-size: 1em"></i>
                    </span>
                    <Password
                      v-model="user_auth.password"
                      toggleMask
                      placeholder="Contraseña"
                    ></Password>
                  </div>
                </div>
              </div>
              <br />
              <div
                class="container"
                style="
                  display: flex;
                  justify-content: center;
                  flex-direction: column;
                "
              >
                <Button
                  label="Iniciar Sesion"
                  class="p-button"
                  @click="login(user_auth)"
                />
                <br />
                <a>
                  <div class="p-mb-3 p-text-light" style="text-align: center">
                    No tiene una cuenta? registrate
                  </div>
                </a>
              </div>
            </div>
          </div>
        </template>
      </Card>
    </Sidebar>
    <div class="landing_bg__1"></div>
    <div class="landing_bg__2"></div>
    <div class="landing_wrapper">
      <header class="landing_header">
        <img
          src="../assets/citrus-logo.jpg"
          alt=""
          class="landing_header_logo"
        />
        <Button
          label="Ingresa"
          class="landing_header_btn"
          @click="visibleLogin = true"
        />
      </header>
      <section class="landing_hero">
        <h1 class="landing_hero_title">
          Encuentra a tu empleado
          <span class="landing_hero_highlight" /> <br />al alcance de un click
        </h1>
        <p class="landing_hero_text">
          Estamos construyendo el futuro del trabajo remoto, únete y ayudanos a
          hacerlo realidad
        </p>
        <Button
          label="Regístrate"
          class="landing_hero_btn"
          @click="visibleSingUp = true"
        />
      </section>
      <section class="landing_promo">
        <h2 class="landing_promo_title">La mejor manera de trabajar</h2>
        <p class="landing_promo_text">
          Crea tu oferta y nosotros nos encargamos del resto
        </p>
      </section>
      <section class="landing_employeer">
        <h2 class="landing_employeer_title">Para empleadores</h2>
        <div class="landing_employeer_content-container">
          <ul class="landing_employeer_content-container__left">
            <li class="landing_employeer_content-container__left_element">
              <i
                class="
                  pi pi-chevron-circle-down
                  landing_employeer_content-container__left_element_icon
                "
              ></i>
              <p>
                Aprovecha tu tiempo de una mejor manera y déjanos el trabajo
                pesado a nosotros
              </p>
            </li>

            <li class="landing_employeer_content-container__left_element">
              <i
                class="
                  pi pi-star-o
                  landing_employeer_content-container__left_element_icon
                "
              ></i>
              <p>
                Todos nuestros empleados proveeran la mejor elección posible
              </p>
            </li>

            <li class="landing_employeer_content-container__left_element">
              <i
                class="
                  pi pi-shield
                  landing_employeer_content-container__left_element_icon
                "
              ></i>
              <p>
                Si no está feliz con nuestro producto, le devolvemos su dinero
              </p>
            </li>
          </ul>
          <img
            src="../assets/product.png"
            alt="Application"
            class="landing_employeer_content-container__right"
          />
        </div>
      </section>
      <footer class="landing_footer">
        © Citrus 2021. Todos los derechos reservados
      </footer>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Button from 'primevue/button'
import Password from 'primevue/password'
import InputText from 'primevue/inputtext'
import Sidebar from 'primevue/sidebar'
import Card from 'primevue/card'
import Textarea from 'primevue/textarea'
import Divider from 'primevue/divider'
//singup
import { SingUpController } from '@/Employer/infraestructure/controllers/SingUpController'
import { SingUpPersistence } from '@/Employer/domain/DTO/SingUpDTO'
import { SingUpService } from '@/Employer/application/services/SingUpService'
import { SingUpAdapter } from '@/Employer/infraestructure/adapters/in/SingUpAdapter'
import { SingUpStatusAdapter } from '@/Employer/infraestructure/adapters/out/SingUpStatusAdapter'
//import {} from '@/Employer/infraestructure/adapters/out/SingUpStateAdapter';
//login
import { LoginController } from '@/Employer/infraestructure/controllers/LoginController'
import { LoginAdapter } from '@/Employer/infraestructure/adapters/LoginAdapter'
import { LoginService } from '@/Employer/application/services/LoginService'
import { LoginStateAdaptare } from '@/Employer/infraestructure/adapters/out/LoginStateAdapter'
import { LoginStatusAdapter } from '@/Employer/infraestructure/adapters/out/LoginStatusAdapter'
export default defineComponent({
  data() {
    return {
      visibleLogin: false,
      visibleSingUp: false,
      user_auth: {
        username: '',
        password: '',
      },
      singup_body: {
        username: '',
        email: '',
        password: '',
        street1: '',
        street2: '',
        city: '',
        state: '',
        zip: '',
        company_name: '',
        special_requirements: '',
      },
    }
  },
  components: {
    Button,
    Sidebar,
    Password,
    InputText,
    Textarea,
    Card,
    Divider,
  },
  methods: {
    SingUp(sing_up_body: SingUpPersistence) {
      let adapter = new SingUpAdapter()
      let statusAdapter = new SingUpStatusAdapter()
      let service = new SingUpService(adapter, statusAdapter)
      let controller = new SingUpController(service)
      controller.executeimpl(sing_up_body)
    },
    login(user_auth: { username: string; password: string }) {
      let adapter = new LoginAdapter()
      let stateAdapter = new LoginStateAdaptare()
      let statusAdapter = new LoginStatusAdapter()
      let service = new LoginService(adapter, stateAdapter, statusAdapter)
      let controller = new LoginController(service)
      controller.executeImpl(user_auth)
    },
  },
  computed: {
    status(): any {
      return this.$store.getters.getOperationStatus
    },
  },
})
</script>

<style lang="scss" scoped>
.landing {
  background: var(--color-gray-01);
  font-size: 1.6rem;
  overflow: hidden;
  padding: 0 2rem;

  &_bg__1,
  &_bg__2 {
    background-color: #fafafb;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2000 1500'%3E%3Cdefs%3E%3Crect stroke='%23fafafb' stroke-width='.5' width='1' height='1' id='s'/%3E%3Cpattern id='a' width='3' height='3' patternUnits='userSpaceOnUse' patternTransform='scale(50) translate(-980 -735)'%3E%3Cuse fill='%23f5f5f6' href='%23s' y='2'/%3E%3Cuse fill='%23f5f5f6' href='%23s' x='1' y='2'/%3E%3Cuse fill='%23f0f0f1' href='%23s' x='2' y='2'/%3E%3Cuse fill='%23f0f0f1' href='%23s'/%3E%3Cuse fill='%23ebebec' href='%23s' x='2'/%3E%3Cuse fill='%23ebebec' href='%23s' x='1' y='1'/%3E%3C/pattern%3E%3Cpattern id='b' width='7' height='11' patternUnits='userSpaceOnUse' patternTransform='scale(50) translate(-980 -735)'%3E%3Cg fill='%23e6e6e7'%3E%3Cuse href='%23s'/%3E%3Cuse href='%23s' y='5' /%3E%3Cuse href='%23s' x='1' y='10'/%3E%3Cuse href='%23s' x='2' y='1'/%3E%3Cuse href='%23s' x='2' y='4'/%3E%3Cuse href='%23s' x='3' y='8'/%3E%3Cuse href='%23s' x='4' y='3'/%3E%3Cuse href='%23s' x='4' y='7'/%3E%3Cuse href='%23s' x='5' y='2'/%3E%3Cuse href='%23s' x='5' y='6'/%3E%3Cuse href='%23s' x='6' y='9'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='h' width='5' height='13' patternUnits='userSpaceOnUse' patternTransform='scale(50) translate(-980 -735)'%3E%3Cg fill='%23e6e6e7'%3E%3Cuse href='%23s' y='5'/%3E%3Cuse href='%23s' y='8'/%3E%3Cuse href='%23s' x='1' y='1'/%3E%3Cuse href='%23s' x='1' y='9'/%3E%3Cuse href='%23s' x='1' y='12'/%3E%3Cuse href='%23s' x='2'/%3E%3Cuse href='%23s' x='2' y='4'/%3E%3Cuse href='%23s' x='3' y='2'/%3E%3Cuse href='%23s' x='3' y='6'/%3E%3Cuse href='%23s' x='3' y='11'/%3E%3Cuse href='%23s' x='4' y='3'/%3E%3Cuse href='%23s' x='4' y='7'/%3E%3Cuse href='%23s' x='4' y='10'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='c' width='17' height='13' patternUnits='userSpaceOnUse' patternTransform='scale(50) translate(-980 -735)'%3E%3Cg fill='%23e1e1e2'%3E%3Cuse href='%23s' y='11'/%3E%3Cuse href='%23s' x='2' y='9'/%3E%3Cuse href='%23s' x='5' y='12'/%3E%3Cuse href='%23s' x='9' y='4'/%3E%3Cuse href='%23s' x='12' y='1'/%3E%3Cuse href='%23s' x='16' y='6'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='d' width='19' height='17' patternUnits='userSpaceOnUse' patternTransform='scale(50) translate(-980 -735)'%3E%3Cg fill='%23fafafb'%3E%3Cuse href='%23s' y='9'/%3E%3Cuse href='%23s' x='16' y='5'/%3E%3Cuse href='%23s' x='14' y='2'/%3E%3Cuse href='%23s' x='11' y='11'/%3E%3Cuse href='%23s' x='6' y='14'/%3E%3C/g%3E%3Cg fill='%23dcdcdd'%3E%3Cuse href='%23s' x='3' y='13'/%3E%3Cuse href='%23s' x='9' y='7'/%3E%3Cuse href='%23s' x='13' y='10'/%3E%3Cuse href='%23s' x='15' y='4'/%3E%3Cuse href='%23s' x='18' y='1'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='e' width='47' height='53' patternUnits='userSpaceOnUse' patternTransform='scale(50) translate(-980 -735)'%3E%3Cg fill='%23F60'%3E%3Cuse href='%23s' x='2' y='5'/%3E%3Cuse href='%23s' x='16' y='38'/%3E%3Cuse href='%23s' x='46' y='42'/%3E%3Cuse href='%23s' x='29' y='20'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='f' width='59' height='71' patternUnits='userSpaceOnUse' patternTransform='scale(50) translate(-980 -735)'%3E%3Cg fill='%23F60'%3E%3Cuse href='%23s' x='33' y='13'/%3E%3Cuse href='%23s' x='27' y='54'/%3E%3Cuse href='%23s' x='55' y='55'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='g' width='139' height='97' patternUnits='userSpaceOnUse' patternTransform='scale(50) translate(-980 -735)'%3E%3Cg fill='%23F60'%3E%3Cuse href='%23s' x='11' y='8'/%3E%3Cuse href='%23s' x='51' y='13'/%3E%3Cuse href='%23s' x='17' y='73'/%3E%3Cuse href='%23s' x='99' y='57'/%3E%3C/g%3E%3C/pattern%3E%3C/defs%3E%3Crect fill='url(%23a)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23b)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23h)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23c)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23d)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23e)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23f)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23g)' width='100%25' height='100%25'/%3E%3C/svg%3E");
    background-size: cover;
    background-size: 60rem;
    height: 70rem;
    width: 10rem;
    position: absolute;
  }

  &_bg__1 {
    top: 30rem;
    left: 0;
  }

  &_bg__2 {
    top: 0;
    right: 0;
  }

  &_wrapper {
    max-width: 1000px;
    margin: auto;
    z-index: 1;
    position: relative;
  }

  &_footer {
    text-align: center;
    padding: 10rem 0 3rem 0;
    color: var(--color-gray-03);
  }

  &_header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 2rem;

    &_logo {
      height: 6rem;
      width: 6rem;
      border-radius: 50%;
    }

    &_btn {
      background: transparent !important;
      border: 1px solid var(--color-orange-01) !important;
      color: var(--color-orange-01) !important;
      padding: 1rem;

      &:hover {
        background: var(--color-orange-01) !important;
        color: var(--color-white) !important;
      }
    }
  }

  &_hero {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5rem 0;

    &_title {
      margin-top: 10rem;
      font-size: 4rem;
      text-align: center;
      color: var(--color-gray-04);
    }

    &_highlight {
      color: var(--color-orange-01);

      &::before {
        content: '';
        animation: animate infinite 8s;
      }
    }

    &_text {
      font-size: 1.8rem;
      color: var(--color-gray-03);
      max-width: 70rem;
      text-align: center;
      max-width: 70rem;
    }

    &_btn {
      margin-top: 3rem;
      padding: 1rem 3rem;
    }
  }

  &_promo {
    padding-top: 15rem;

    &_title {
      font-size: 3rem;
      color: var(--color-gray-04);
      text-align: center;
    }

    &_text {
      font-size: 1.8rem;
      color: var(--color-gray-03);
      max-width: 70rem;
      text-align: center;
      margin: auto;
      max-width: 70rem;
    }
  }

  &_employeer {
    padding-top: 10rem;

    &_title {
      font-size: 3rem;
      color: var(--color-gray-04);
    }

    &_content-container {
      list-style: none;
      color: var(--color-gray-03);
      display: flex;
      position: relative;
      align-items: center;

      &__left {
        max-width: 60%;
        min-width: 40%;
        flex-shrink: 0;
        padding-right: 4rem;

        &_element {
          margin-bottom: 2rem;
          display: flex;
          align-items: center;

          &_icon {
            padding: 1.5rem;
            font-size: 1.8rem;
            color: var(--color-white);
            background: var(--color-orange-01);
            border-radius: 5px;
            margin: 0.5rem 2rem 0.5rem 0.5rem;
          }
        }
      }

      &__right {
        max-height: 30rem;
        position: relative;
        top: 0rem;
        left: 1rem;
        box-shadow: rgba(3, 3, 53, 0.06) 0px 8px 16px 0px;
      }
    }
  }
  @keyframes animate {
    0%,
    100% {
      content: 'ideal';
    }
    33% {
      content: 'deseado';
    }
    66% {
      content: 'modelo';
    }
  }
}

.reg_title {
  color: var(--color-orange-01);
}

.reg_button {
  position: relative;
  right: 0;
}
</style>
