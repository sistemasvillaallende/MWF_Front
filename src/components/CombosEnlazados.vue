<template>
  <div class="row" style="margin-left: -30px; padding-top: 0; padding-right: 0">
    <div
      class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"
      style="margin-top: 10px; margin-bottom: 0"
    >
      <labrl_padre>{{ label_padre }}</labrl_padre>
      <select
        v-model="selectedPadreId"
        @change="CambiaValor"
        class="form-control"
      >
        <option
          v-for="itemPadre in origenPadre"
          :key="itemPadre.value"
          :value="itemPadre.value"
        >
          {{ itemPadre.text }}
        </option>
      </select>
    </div>
    <div
      class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"
      style="margin-top: 10px; margin-bottom: 0"
    >
      {{ label_hijo }}
      <select v-model="selectedHijoId" class="form-control">
        <option
          v-for="itemHijo in filteredHijo"
          :key="itemHijo.value"
          :value="itemHijo.value"
        >
          {{ itemHijo.text }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DependentCombos',
  data: () => ({
    origenPadre: [],
    origenHijo: [],
    selectedPadreId: 0,
    selectedHijoId: 0,
    filteredHijo: [],
  }),
  methods: {
    CambiaValor(event) {
      this.filteredHijo = this.origenHijo.filter(
        (city) => city.cod_enlaza == event.target.value,
      )
      this.selectedHijoId = this.filteredHijo[0].value
    },
  },
  mounted() {
    try {
      this.origenPadre = this.comboPadre
      this.origenHijo = this.comboHijo
      this.filteredHijo = this.comboHijo.filter(
        (city) => city.cod_enlaza == this.selectedPadre,
      )
      this.selectedHijoId = this.filteredHijo[0].value
      this.selectedPadreId = this.selectedPadre
    } catch (error) {
      alert(error)
    }
  },
  props: {
    comboPadre: {
      type: Array,
      required: true,
      default: () => [],
    },
    comboHijo: {
      type: Array,
      required: true,
      default: () => [],
    },
    filtrosHijo: {
      type: Array,
      required: true,
      default: () => [],
    },
    selectedPadre: {
      type: Number,
      default: 0,
    },
    SelectedHijo: {
      type: Number,
      default: 0,
    },
    cod_enlaza: {
      type: String,
      default: '',
    },
    label_padre: {
      type: String,
      default: '',
    },
    label_hijo: {
      type: String,
      default: '',
    },
  },
}
</script>
