import vButton from './components/v-button.vue'
import vInput from './components/v-input.vue'

export default {
    install: (app: any, options: any) => {
        app.component("vButton", vButton)
        app.component("vInput", vInput)
    }
}