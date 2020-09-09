import Vue from 'vue'
import VueMq from 'vue-mq'

Vue.use(VueMq, {
  breakpoints: {
    mobile: 768,
    tablet: 1200,
    desktop: Infinity,
  },
})
