<template>
  <CForm class="row g-3 needs-validation">
    <CRow>
      <CCol xs="12">
        <CCardTitle
          style="
            margin-bottom: 10px;
            margin-top: 0px;
            font-size: 18px;
            font-weight: 500;
            color: var(--roofsie-gray);
          "
          >¿Confirma el ingreso de datos?</CCardTitle
        >
        <p style="margin-top: 15px; margin-bottom: 3px">
          Iniciador: <strong>{{ iniciador }}</strong>
        </p>
        <p>
          Representado: <strong>{{ representado }}</strong>
        </p>
      </CCol>
    </CRow>
    <template v-if="filasUnicas != null">
      <CRow v-for="(itemRow, i) in filasUnicas" :key="i">
        <CCol
          style="margin-bottom: 35px"
          xs="12"
          :lg="itemCol.col"
          :xl="itemCol.col"
          v-for="(itemCol, ic) in formulario.filter(
            (persona) => persona.row === itemRow.row,
          )"
          :key="ic"
        >
          <template v-if="itemCol.id_ddjj != 0">
            <CCardTitle
              style="
                margin-bottom: 10px;
                margin-top: 0px;
                font-size: 18px;
                font-weight: 500;
                color: var(--roofsie-gray);
              "
              >Solicitud</CCardTitle
            >
            <hr />
            <div v-html="itemCol.objDDJJ.texto"></div>
          </template>
          <template v-if="itemCol.id_formulario != 0">
            <CCardTitle
              style="
                margin-bottom: 10px;
                margin-top: 0px;
                font-size: 18px;
                font-weight: 500;
                color: var(--roofsie-gray);
              "
            >
              {{
                itemCol.objFormulario.nombre[0].toUpperCase() +
                itemCol.objFormulario.nombre.substring(1).toLowerCase()
              }}
            </CCardTitle>
            <hr />
            <CCardText
              v-if="
                itemCol.objFormulario != null &&
                itemCol.objFormulario != 'undefined'
              "
            >
              <CRow
                v-for="(campo, c) in itemCol.objFormulario.lstCampos.filter(
                  (filas, index, self) =>
                    index === self.findIndex((f) => f.row === filas.row),
                )"
                :key="c"
                style="padding: 0; padding-bottom: 5px"
              >
                <CCol
                  xs="12"
                  :lg="item.col"
                  :xl="item.col"
                  v-for="(item, ico) in itemCol.objFormulario.lstCampos.filter(
                    (persona) => persona.row === campo.row,
                  )"
                  :key="ico"
                >
                  <div v-if="item.id_tipo_campo == 1">
                    <p>
                      {{
                        item.etiqueta[0].toUpperCase() +
                        item.etiqueta.substring(1).toLowerCase()
                      }}: <br /><strong>{{ item.ingreso_usuario }}</strong>
                    </p>
                  </div>
                  <div v-if="item.id_tipo_campo == 2">
                    <p>
                      {{
                        item.etiqueta[0].toUpperCase() +
                        item.etiqueta.substring(1).toLowerCase()
                      }}: <br /><strong>{{ item.ingreso_usuario }}</strong>
                    </p>
                  </div>
                  <div v-if="item.id_tipo_campo == 3">
                    <p>
                      {{
                        item.etiqueta[0].toUpperCase() +
                        item.etiqueta.substring(1).toLowerCase()
                      }}: <br /><strong>{{ item.ingreso_usuario }}</strong>
                    </p>
                  </div>
                  <div v-if="item.id_tipo_campo == 4">
                    <p>
                      {{
                        item.etiqueta[0].toUpperCase() +
                        item.etiqueta.substring(1).toLowerCase()
                      }}: <br /><strong>{{ item.ingreso_usuario }}</strong>
                    </p>
                  </div>
                  <div v-if="item.id_tipo_campo == 5">
                    <p>
                      {{
                        item.etiqueta[0].toUpperCase() +
                        item.etiqueta.substring(1).toLowerCase()
                      }}: <br /><strong>{{ item.ingreso_usuario }}</strong>
                    </p>
                  </div>
                  <div v-if="item.id_tipo_campo == 6">
                    <p>
                      {{
                        item.etiqueta[0].toUpperCase() +
                        item.etiqueta.substring(1).toLowerCase()
                      }}: <br /><strong>{{ item.ingreso_usuario }}</strong>
                    </p>
                  </div>
                  <div v-if="item.id_tipo_campo == 7">
                    <p>
                      {{
                        item.etiqueta[0].toUpperCase() +
                        item.etiqueta.substring(1).toLowerCase()
                      }}: <br /><strong>{{ item.ingreso_usuario }}</strong>
                    </p>
                  </div>
                  <div v-if="item.id_tipo_campo == 8">
                    <p>
                      {{
                        item.etiqueta[0].toUpperCase() +
                        item.etiqueta.substring(1).toLowerCase()
                      }}: <br />

                      <strong v-if="item.formato_resultado == 'texto'">
                        {{ item.ingreso_usuario }}</strong
                      >
                      <strong v-else-if="item.formato_resultado == 'comas'">
                        {{ item.ingreso_usuario.split(',')[1] }}</strong
                      >
                    </p>
                  </div>
                  <div v-if="item.id_tipo_campo == 9">
                    <p
                      v-for="seleccionado in item.ingreso_usuario"
                      :key="seleccionado.value"
                    >
                      <CIcon icon="cil-task" />&nbsp;
                      <strong>{{ seleccionado.text }}</strong>
                    </p>
                  </div>
                  <div v-if="item.id_tipo_campo == 14">
                    <p>
                      {{
                        item.etiqueta[0].toUpperCase() +
                        item.etiqueta.substring(1).toLowerCase()
                      }}: <br />

                      <strong v-if="item.formato_resultado == 'texto'">
                        {{ item.ingreso_usuario }}</strong
                      >
                      <strong v-else-if="item.formato_resultado == 'comas'">
                        {{ item.ingreso_usuario.split(',')[1] }}</strong
                      >
                    </p>
                  </div>
                </CCol>
              </CRow>
            </CCardText>
          </template>
          <template v-if="itemCol.id_adjunto != 0">
            <template v-if="itemCol.objAdjunto.multiple == false">
              <CCardTitle
                style="
                  margin-bottom: 10px;
                  margin-top: 0px;
                  font-size: 18px;
                  font-weight: 500;
                  color: var(--roofsie-gray);
                "
                >Documentación</CCardTitle
              >
              <hr />
              <CWidgetStatsF
                color="danger"
                :value="itemCol.objAdjunto.etiqueta"
                :title="itemCol.objAdjunto.descripcion"
              >
                <template #icon>
                  <CIcon :icon="icon.cibAdobeAcrobatReader" size="xl" />
                </template>
              </CWidgetStatsF>
            </template>
            <template v-else>
              <CCardTitle
                style="
                  margin-bottom: 10px;
                  margin-top: 0px;
                  font-size: 18px;
                  font-weight: 500;
                  color: var(--roofsie-gray);
                "
              >
                {{ itemCol.objAdjunto.descripcion }}
              </CCardTitle>
              <hr />
              <CAlert
                v-for="(image, index) in image"
                :key="index"
                style="display: inline-flex; margin: 0px; padding: 5px"
              >
                <img
                  :src="image"
                  style="
                    height: 100px;
                    width: auto;
                    margin-top: 20px;
                    border: solid gray;
                    border-radius: 15px;
                  "
                />
              </CAlert>
            </template>
          </template>
        </CCol>
      </CRow>
    </template>
    <CRow>
      <CCol xs="12">
        <button
          type="submit"
          @click="btnSiguiente_clickHijo(paso, 0)"
          class="btn btn-primary shadow-md me-2"
          style="float: left"
        >
          <span>Anterior</span><i class="pi pi-arrow-left"></i>
        </button>
        <button
          type="submit"
          @click="subirArchivosMarcoLegal()"
          class="btn btn-primary shadow-md me-2"
          style="float: right"
        >
          <span>Enviar</span><i class="pi pi-arrow-right"></i>
        </button>
      </CCol>
    </CRow>
  </CForm>
  <CModal
    backdrop="static"
    style="margin-top: 150px !important"
    :visible="visibleLiveDemo"
    @close="
      () => {
        visibleLiveDemo = false
      }
    "
  >
    <CModalBody style="text-align: center">
      <i class="fa fa-check btn-delete" style="color: #2c9587"></i>
      <h3 style="font-size: 24px">Su tramite se genero exitosamente!</h3>
      <CButton
        @click="btnFinalizar()"
        color="primary"
        style="
          color: #fff !important;
          background-color: #2c9587 !important;
          border-color: #2c9587 !important;
          margin-top: 25px;
        "
        >Continuar</CButton
      >
    </CModalBody>
  </CModal>
</template>
<style scoped>
.v-select.v-select--chips:not(
    .v-text-field--single-line
  ).v-text-field--box.v-input--dense
  .v-select__selections,
.v-select.v-select--chips:not(
    .v-text-field--single-line
  ).v-text-field--enclosed.v-input--dense
  .v-select__selections {
  min-height: 40px;
}
hr:not([size]) {
  height: 2px;
}
hr {
  margin: 1rem 0;
  color: inherit;
  background-color: #ffc107;
  border: 0;
  opacity: 0.75;
}
.v-alert__content {
  padding-left: 10px;
}
</style>

<script>
import { CIcon } from '@coreui/icons-vue'
import * as icon from '@coreui/icons'
import axios from 'axios'
export default {
  components: {
    CIcon,
  },
  data: () => ({
    icon,
    maxValue: 0,
    text: '',
    value: '',
    chkDJJ: false,
    chipErrorDDJJ: false,
    nroPaso: 2,
    error: false,
    contador: 0,
    textoError: '',
    habilita: false,
    errors: [],
    multisel: null,
    formulario: null,
    visibleLiveDemo: false,
    image: [],
    filasUnicas: [],
  }),
  mounted() {
    this.formulario = this.$store.getters.getPaso
    this.image = this.$store.getters.getPreviaImagenes
    this.filasUnicas = this.formulario.filter(
      (filas, index, self) =>
        index === self.findIndex((f) => f.row === filas.row),
    )
    console.log(JSON.stringify(this.filasUnicas))
  },
  props: {
    iniciador: {
      type: String,
      default: '',
    },
    representado: {
      type: String,
      default: 'A si mismo',
    },
    paso: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    btnFinalizar() {
      this.$router.push('/MisTramites')
    },
    btnSiguiente_clickHijo(pasoDestino, direccion) {
      this.$emit('tengo_resultados', pasoDestino, direccion)
    },
    async subirArchivosMarcoLegal() {
      let InstFormData = new FormData()
      InstFormData.append(
        'resultados',
        JSON.stringify(this.$store.getters.getPaso),
      )
      InstFormData.append('idTramite', this.$store.getters.idTramite)
      InstFormData.append('idPaso', this.$store.getters.idPaso)
      InstFormData.append('cuit', this.$store.getters.cuit)
      InstFormData.append(
        'cuitrepresentado',
        this.$store.getters.cuitrepresentado,
      )
      this.formulario = (
        await axios.post('/Paso/savePaso', InstFormData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
      ).data
      this.visibleLiveDemo = true
      /*
      const binaryString = window.atob(document.getElementById('archivo').value)
      const len = binaryString.length
      const bytes = new Uint8Array(len)
      for (let i = 0; i < len; ++i) {
        bytes[i] = binaryString.charCodeAt(i)
      }

      const blob = new Blob([bytes], { type: 'application/pdf' })
      const blobURL = URL.createObjectURL(blob)
      const link = document.createElement('a')
      //link.setAttribute('target', '_blank');
      link.setAttribute('download', `mi.pdf`)
      link.href = blobURL
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)*/
    },
  },
}
</script>
<style src="vue-multiselect/dist/vue-multiselect.css"></style>
