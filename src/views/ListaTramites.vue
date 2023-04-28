<template>
  <div style="min-height: 750px">
    <Header style="margin-top: 0px"></Header>
    <div
      class="container"
      v-if="this.tramite != null && this.tramite != 'undefined'"
    >
      <v-card elevation="20">
        <div class="row" style="padding-top: 25px; padding-left: 10px">
          <div class="col-xs-12">
            <h2 class="intro-y fs-lg fw-medium">Mis Tramites</h2>
            <hr
              style="margin-top: 10px; opacity: 1; border: solid #fad613 1px"
            />
          </div>
        </div>
        <div style="padding: 10px">
          <div class="row" style="padding-top: 25px; padding-bottom: 25px">
            <div class="col-8">
              <div class="position-relative text-gray-700 dark-text-gray-300">
                <input
                  type="text"
                  class="form-control box border-white dark-border-dark-3 pe-10 placeholder-theme-8"
                  placeholder="Search..."
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-search w-4 h-4 position-absolute my-auto top-0 bottom-0 me-3 end-0"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </div>
            </div>
            <div class="col-4" style="text-align: right">
              <mq-responsive target="xs" tag="div">
                <button
                  target="sm"
                  class="btn btn-primary shadow-md me-2"
                  style="border-radius: 50%; font-size: 20px; padding: 10px"
                >
                  <i class="fa fa-plus"></i>
                </button>
              </mq-responsive>
              <mq-responsive target="md+" tag="div">
                <button class="btn btn-primary shadow-md me-2">
                  Nuevo Tramite
                </button>
              </mq-responsive>
            </div>
          </div>
          <CContainer style="padding: 0">
            <CRow :xs="{ cols: 2 }">
              <CCol
                v-for="(tra, index) in tramite"
                :key="index"
                style="margin-bottom: 20px"
              >
                <template v-if="pantalla < 768">
                  <TarjetaTramitesMobile :tramite="tra"></TarjetaTramitesMobile>
                </template>
                <template v-else>
                  <TarjetaMisTramitesPC :tramite="tra"></TarjetaMisTramitesPC>
                </template>
              </CCol>
            </CRow>
          </CContainer>
        </div>
      </v-card>
    </div>
  </div>
</template>
<style scoped>
@import '../assets/css/app.css';
.btn-primary {
  background-color: rgb(15 153 202) !important;
}
.main-header-two__shape-3 {
  bottom: 0.5px !important;
}
img {
  display: inline !important;
}
.box,
.pagination .page-item.active .page-link,
.search-result .search-result__content {
  --bs-bg-opacity: 1;
  --bs-border-opacity: 1;
  background-color: rgba(var(--bs-white-rgb), var(--bs-bg-opacity));
  border-color: transparent;
  border-top: solid 1px lightgray;
  border-radius: 0.375rem;
  box-shadow: 0 3px 20px #0000000b;
  position: relative;
  box-shadow: 1px 3px 2px 1px
      var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)),
    0 1px 1px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)),
    0 1px 3px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.12));
}
</style>
<script>
import Header from '../components/Headers/HeaderVecino.vue'
import TarjetaMisTramitesPC from '../components/TarjetaMisTramitesPC.vue'
import TarjetaTramitesMobile from '@/components/TarjetaTramitesMobile.vue'
import axios from 'axios'
import Cookies from 'js-cookie'
import { useRoute } from 'vue-router'

export default {
  inject: ['mq'],
  data: () => ({
    tabPaneActiveKey: 1,
    tramite: [],
    pantalla: 0,
    vecino: null,
  }),
  components: {
    Header,
    TarjetaMisTramitesPC,
    TarjetaTramitesMobile,
  },
  mounted() {
    try {
      const route = useRoute()
      axios
        .get(
          'http://10.0.0.200/WebApiShared/UsuarioCIDI/ObtenerUsuarioCIDI2?Hash=' +
            route.params.hash,
        )
        .then(
          (response) => (
            (this.vecino = response.data),
            Cookies.set('vecino_cuit', response.data.cuil),
            Cookies.set('vecino_cuitRepresentado', response.data.cuil),
            Cookies.set('vecino_cuitFormateado', response.data.cuilFormateado),
            Cookies.set(
              'vecino_nombreFormateado',
              response.data.nombreFormateado,
            ),
            this.$store.commit('setFoto', response.data.foto)
          ),
        )
        .catch((this.labelError = true))

      axios
        .get(
          'https://localhost:7065/Tramites/read?cuit=' +
            Cookies.get('vecino_cuit'),
        )
        .then((response) => (this.tramite = response.data))

      /*this.tramite = axios.get(
        'https://localhost:7065/Tramites/read?cuit=23271734999',
      ).data*/
      this.pantalla = window.innerWidth
    } catch (error) {
      alert('error')
    }
  },
  props: {
    nextButton: {
      type: Object,
      default: function () {
        return {}
      },
    },
  },
  methods: {
    validadeFormOne() {
      return false
    },
  },
}
</script>
