import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css'
Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    options: { customProperties: true },
    themes: {
      light: {
        primary: '#f3c407',
        'light-yellow': '#f3dc8d',
        secondary: '#046188',
        'light-blue-1': '#649baa',
        'light-blue-2': '#a1c5d1',
        "black": '#010101',
        white: '#ffffff'
      }
    },
  },
});
