import { createStore } from 'vuex'

export default createStore({
  state() {
    return {
      cuit: '',
      cuitRepresentado: '',
      cuitFormateado: '',
      NombreFormateado: '',
      foto: '',
      asideVisible: false,
      sidebarVisible: '',
      sidebarUnfoldable: false,
      theme: 'default',
      idTramite: 0,
      idPaso: 0,
      paso: [],
      origen_hijo: [],
      previa_images: [],
      imagenes: [],
    }
  },
  mutations: {
    setCuit(state, cuit) {
      state.cuit = cuit
    },
    setCuitRepresentado(state, cuitRepresentado) {
      state.cuitRepresentado = cuitRepresentado
    },
    setcuitFormateado(state, cuitFormateado) {
      state.cuitFormateado = cuitFormateado
    },
    setNombreFormateado(state, NombreFormateado) {
      state.NombreFormateado = NombreFormateado
    },
    setFoto(state, foto) {
      state.foto = foto
    },
    clearTramite(state) {
      state.asideVisible = false
      state.sidebarVisible = ''
      state.sidebarUnfoldable = false
      state.theme = 'default'
      state.idTramite = 0
      state.idPaso = 0
      state.paso = []
      state.origen_hijo = []
      state.previa_images = []
      state.imagenes = []
    },
    addItem(state, item) {
      if (state.paso != null) {
        let cont = state.paso.findIndex((object) => object.id === item.id)
        if (cont == -1) {
          state.paso.push(item)
        } else {
          state.paso.splice(cont, 1, item)
        }
      } else {
        state.paso.addItem(item)
      }
    },
    previaImagenesDeleteItem(state, item) {
      if (state.previa_images != null) {
        state.previa_images.splice(item, 1)
      }
    },
    previaImagenesAddItem(state, item) {
      if (state.previa_images != null) {
        let cont = state.previa_images.findIndex((object) => object === item)
        if (cont == -1) {
          state.previa_images.push(item)
        } else {
          state.previa_images.splice(cont, 1, item)
        }
      } else {
        state.previa_images.addItem(item)
      }
    },
    ImagenesAddItem(state, item) {
      if (state.imagenes != null) {
        let cont = state.imagenes.findIndex((object) => object === item)
        if (cont == -1) {
          state.imagenes.push(item)
        } else {
          state.imagenes.splice(cont, 1, item)
        }
      } else {
        state.imagenes.addItem(item)
      }
    },
    ImagenesDeleteItem(state, item) {
      if (state.imagenes != null) {
        state.imagenes.splice(item, 1)
      }
    },
    setImagenes(state, imagenes) {
      state.imagenes = imagenes
    },
    setPreviaImagenes(state, previa_images) {
      state.previa_images = previa_images
    },
    setOrigen_hijo(state, origen_hijo) {
      state.origen_hijo = origen_hijo
    },
    setIdTramite(state, payload) {
      state.idTramite = payload
    },
    setIdPaso(state, payload) {
      state.idPaso = payload
    },
    toggleAside(state) {
      state.asideVisible = !state.asideVisible
    },
    toggleSidebar(state) {
      state.sidebarVisible = !state.sidebarVisible
    },
    toggleTheme(state, payload) {
      state.theme = payload.value
    },
    toggleUnfoldable(state) {
      state.sidebarUnfoldable = !state.sidebarUnfoldable
    },
    updateSidebarVisible(state, payload) {
      state.sidebarVisible = payload.value
    },
  },
  getters: {
    getCuit(state) {
      return state.cuit
    },
    getcuitRepresentado(state) {
      return state.cuitRepresentado
    },
    getcuitFormateado(state) {
      return state.cuitFormateado
    },
    getNombreFormateado(state) {
      return state.NombreFormateado
    },
    getFoto(state) {
      return state.foto
    },
    getImagenes(state) {
      return state.imagenes
    },
    getPreviaImagenes(state) {
      return state.previa_images
    },

    origen_hijo(state) {
      return state.origen_hijo
    },
    idTramite(state) {
      return state.idTramite
    },
    idPaso(state) {
      return state.idPaso
    },
    getItemById: (state) => (id) => {
      return state.paso.find((item) => item.id === id)
    },
    getPaso(state) {
      return state.paso
    },
  },
  actions: {},
  modules: {},
})
