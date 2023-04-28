<template>
  <div class="box" v-if="tramite != null && tramite != 'undefined'">
    <div class="container" style="padding: 0">
      <div class="row" style="margin-left: 0; margin-right: 0">
        <div
          class="col-3"
          style="
            padding: 10px;
            text-align: center;
            border-bottom: 1px solid lightgray;
            padding: 10px;
          "
        >
          <img
            style="height: 75px; width: auto; margin-top: 12px"
            alt="Icewall Bootstrap HTML Admin Template"
            :src="
              'https://vecino.villaallende.gov.ar/img/' + tramite.logo_oficina
            "
          />
        </div>
        <div
          class="col-9"
          style="
            border-left: solid 1px lightgray;
            padding: 10px;
            border-bottom: 1px solid lightgray;
          "
        >
          <a href="" class="fw-medium">{{ tramite.nombre_oficina }}</a>
          <div
            class="text-gray-600 fs-xs mt-0.5"
            style="margin-top: 10px !important"
          >
            {{ tramite.nombre_tramite }}
          </div>
          <div
            style="margin-top: 15px !important"
            v-if="tramite.nro_expediente != 0"
            class="text-gray-600 fs-xs mt-0.5"
          >
            Nro. Expediente: {{ tramite.anio }}{{ tramite.nro_expediente }}
          </div>
          <div v-else class="text-gray-600 fs-xs mt-0.5">
            Nro. Tramite: {{ tramite.anio }}{{ tramite.id }}
          </div>
          <div class="text-gray-600 fs-xs mt-0.5">
            <span
              class="fa fa-calendar"
              style="font-size: 18px; margin-right: 5px"
            ></span>
            <span>{{ new Date(tramite.fecha).toLocaleDateString() }}</span>
          </div>
          <div
            class="py-1 px-2 rounded-pill fs-xs bg-theme-10 text-white cursor-pointer fw-medium"
            style="
              float: right;
              right: 10px;
              position: absolute;
              font-size: 11px !important;
              top: 10px;
              background-color: rgb(33, 77, 99) !important;
              color: white !important;
            "
          >
            EN PROCESO...
          </div>
        </div>
      </div>
    </div>
    <div
      class="d-flex flex-wrap flex-lg-nowrap align-items-center justify-content-center p-5"
      style="padding: 15px !important"
    >
      <div class="w-full w-lg-1/2 mb-4 mb-lg-0 me-auto">
        <div class="d-flex text-gray-600 fs-xs">
          <div class="me-auto">Avance</div>
          <div>{{ tramite.avance }}%</div>
        </div>
        <div class="progress h-1 mt-2">
          <div
            class="progress-bar w-1/2 bg-theme-17"
            role="progressbar"
            aria-valuenow="0"
            aria-valuemin="0"
            aria-valuemax="100"
            style="background-color: #214d63 !important"
          ></div>
        </div>
      </div>
      <button class="btn btn-primary py-1 px-2 me-2">Visualizar</button>
      <button class="btn btn-outline-secondary py-1 px-2">Cancelar</button>
    </div>
  </div>
</template>
<style scoped>
@import '../assets/css/app.css';
.text-gray-600 {
  --bs-text-opacity: 1;
  color: rgba(var(--bs-gray-600-rgb), var(--bs-text-opacity)) !important;
  padding-top: 5px;
}
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
export default {
  inject: ['mq'],
  data: () => ({
    tabPaneActiveKey: 1,
  }),
  components: {},
  async mounted() {},
  props: {
    tramite: {
      type: Object,
      default: () => ({
        id: undefined,
        id_tramite: undefined,
        cuit: undefined,
        cuit_representado: undefined,
        fecha: undefined,
        paso_anterior: undefined,
        paso_actual: undefined,
        anio: undefined,
        nro_expediente: undefined,
        logo_oficina: undefined,
        nombre_oficina: undefined,
        nombre_tramite: undefined,
        avance: undefined,
      }),
    },
  },
  methods: {
    validadeFormOne() {
      return false
    },
  },
}
</script>
