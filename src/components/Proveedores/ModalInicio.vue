<template>
  <CModal
    :visible="visibleLiveDemo"
    @close="
      () => {
        visibleLiveDemo = false
      }
    "
    style="width: 650px !important; max-width: 650px !important"
  >
    <CModalBody>
      <CRow>
        <CCol xs="6" style="text-align: center">
          <img
            :src="avatar"
            alt="Avetar"
            style="border-radius: 50%; width: 153px; height: 153px"
          />
        </CCol>
        <CCol xs="6" style="align-items: center; display: inline-flex">
          <P
            style="
              font-style: normal;
              font-weight: 400;
              font-size: 40px;
              line-height: 50px;
              letter-spacing: 0.15px;

              color: #000000;
            "
            >Bienvenido<br /><strong>{{ nombreProveedor }}</strong></P
          >
        </CCol>
      </CRow>
      <CRow>
        <CCol xs="12">
          <p
            style="
              font-style: normal;
              font-weight: 500;
              font-size: 20px;
              line-height: 24px;
              text-align: center;

              color: #000000;
            "
          >
            Ordenes de Pedido: {{ totalOrdenes }}
          </p>
        </CCol>
      </CRow>
      <CRow style="padding: 8px">
        <CCol
          xs="12"
          style="display: flex; align-items: center; justify-content: center"
        >
          <CIcon
            :icon="icon.cilThumbUp"
            size="xl"
            style="
              color: rgba(46, 184, 92, 0.7);
              font-size: 48px;
              width: 50px;
              height: 50px;
              border: solid;
              border-radius: 50%;
              padding: 5px;
            "
          />&nbsp;&nbsp;&nbsp;
          <CButton
            style="
              background-color: rgba(46, 184, 92, 0.7);
              height: 46px;
              width: 160px;
            "
          >
            &nbsp;Aprovados: {{ aprobados }}</CButton
          >
        </CCol>
      </CRow>
      <CRow style="padding: 8px">
        <CCol
          xs="12"
          style="display: flex; align-items: center; justify-content: center"
        >
          <CIcon
            :icon="icon.cilThumbUp"
            size="xl"
            style="
              color: rgba(15, 153, 202, 0.7);
              font-size: 48px;
              width: 50px;
              height: 50px;
              border: solid;
              border-radius: 50%;
              padding: 5px;
            "
          />&nbsp;&nbsp;&nbsp;
          <CButton
            style="
              background-color: rgba(15, 153, 202, 0.7);
              height: 46px;
              height: 46px;
              width: 160px;
            "
          >
            &nbsp;Pendientes: {{ aprobados }}</CButton
          >
        </CCol>
      </CRow>
      <CRow style="padding: 8px">
        <CCol
          xs="12"
          style="display: flex; align-items: center; justify-content: center"
        >
          <CIcon
            :icon="icon.cilThumbUp"
            size="xl"
            style="
              color: rgba(228, 83, 83, 0.7);
              font-size: 48px;
              width: 50px;
              height: 50px;
              border: solid;
              border-radius: 50%;
              padding: 5px;
            "
          />&nbsp;&nbsp;&nbsp;
          <CButton
            style="
              background-color: rgba(228, 83, 83, 0.7);
              height: 46px;
              height: 46px;
              width: 160px;
            "
          >
            &nbsp;Rechazados: {{ aprobados }}</CButton
          >
        </CCol>
      </CRow>
    </CModalBody>
    <CModalFooter>
      <CButton
        class="btn btn-warning"
        @click="
          () => {
            visibleLiveDemo = false
          }
        "
      >
        Ver Pedidos
      </CButton>
    </CModalFooter>
  </CModal>
</template>

<script>
import { CIcon } from '@coreui/icons-vue'
import * as icon from '@coreui/icons'
export default {
  name: 'ModalInicio',
  data: () => ({
    visibleLiveDemo: false,
    totalOrdenes: 0,
    icon,
  }),
  components: {
    CIcon,
  },
  props: {
    visble: {
      type: Boolean,
      default: false,
    },
    nombreProveedor: {
      type: String,
      default: '',
    },
    avatar: {
      type: String,
      default: '',
    },
    aprobados: {
      type: Number,
      default: 0,
    },
    pendientes: {
      type: Number,
      default: 0,
    },
    rechazados: {
      type: Number,
      default: 0,
    },
  },
  mounted() {
    this.visibleLiveDemo = this.visble
    this.totalOrdenes =
      parseInt(this.aprobados) +
      parseInt(this.pendientes) +
      parseInt(this.rechazados)
  },
}
</script>
