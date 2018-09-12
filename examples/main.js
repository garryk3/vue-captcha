import Vue from 'vue'
import CaptchaExample from './captcha-example.vue'

Vue.config.productionTip = false

new Vue({
    template: '<CaptchaExample />',
    el: '#example',
    components: {
        CaptchaExample
    }
})