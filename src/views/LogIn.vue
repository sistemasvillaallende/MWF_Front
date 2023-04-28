<template>
  <div
    class="container sm:px-10 login"
    style="overflow-y: hidden; margin-left: 0"
  >
    <div class="block xl:grid grid-cols-2 gap-4">
      <!-- BEGIN: Login Info -->
      <div class="hidden xl:flex flex-col min-h-screen">
        <div class="my-auto">
          <img
            style="height: 150px; width: auto"
            alt="Midone - HTML Admin Template"
            class="-intro-x w-1/2 -mt-16"
            src="../assets/Logo2.png"
          />
        </div>
      </div>
      <!-- END: Login Info -->
      <!-- BEGIN: Login Form -->
      <div class="h-screen xl:h-auto flex py-5 xl:py-0 my-10 xl:my-0">
        <div
          class="my-auto mx-auto xl:ml-20 bg-white dark:bg-darkmode-600 xl:bg-transparent px-5 sm:px-8 py-8 xl:p-0 rounded-md shadow-md xl:shadow-none w-full sm:w-3/4 lg:w-2/4 xl:w-auto"
        >
          <h2
            class="intro-x font-bold text-2xl xl:text-3xl text-center xl:text-left"
          >
            Iniciar Sesión
          </h2>
          <div class="intro-x mt-8"></div>
          <div class="intro-x mt-5 xl:mt-8 text-center xl:text-left">
            <button
              @click="btnIngresar"
              class="btn btn-primary py-3 px-4 w-full xl:w-32 xl:mr-3 align-top"
            >
              Ingresar
            </button>
          </div>
        </div>
      </div>
      <!-- END: Login Form -->
    </div>
  </div>
</template>
<style scoped>
@import '../assets/css/appEnigma.css';
</style>
<script>
//import { useRoute } from 'vue-router'

export default {
  inject: ['mq'],
  data: () => ({
    user: '',
    password: '',
    usuario: null,
    labelError: false,
  }),
  setup() {},
  components: {},
  mounted() {},
  methods: {
    btnIngresar() {
      window.location.href =
        'https://vecino.villaallende.gov.ar/LogInCidi.aspx?url=http%3A%2F%2Flocalhost%3A8080%2F%23%2FListaTramites'
    },
  },
}
</script>
