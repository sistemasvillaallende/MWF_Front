<template>
  <div
    data-v-92b86960=""
    data-v-34dd9120=""
    class="box"
    style="text-align: left"
  >
    <div style="padding: 5px !important; text-align: left">
      <img
        :src="'https://vecino.villaallende.gov.ar/img/' + tramite.logo_oficina"
        style="
          height: 50px;
          width: auto;
          margin: 00;
          margin-top: 10px;
          margin-left: 10px;
        "
      />
      <div
        style="
          text-align: left;
          padding-left: 10px;
          margin-top: 5px !important;
          margin-bottom: 10px;
        "
      >
        <a data-v-92b86960="" href="" class="fw-medium">{{
          tramite.nombre_oficina
        }}</a>
        <div data-v-92b86960="" class="text-gray-600 fs-xs mt-0.5">
          <span
            data-v-92b86960=""
            class="fa fa-calendar"
            style="font-size: 18px; margin-right: 5px"
          ></span
          ><span data-v-92b86960="">{{
            new Date(tramite.fecha).toLocaleDateString()
          }}</span>
        </div>
        <div
          data-v-92b86960=""
          class="py-1 px-2 rounded-pill fs-xs bg-theme-10 text-white cursor-pointer fw-medium"
          style="
            float: right;
            right: 10px;
            position: absolute;
            top: 15px;
            background-color: rgb(33, 77, 99) !important;
            color: white !important;
            font-size: 10px !important;
          "
        >
          T: 000036
        </div>
      </div>
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
