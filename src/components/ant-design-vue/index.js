import Vue from 'vue'

import { Button, Modal, message, notification } from 'ant-design-vue'

Vue.use(Button)
Vue.use(Modal)
Vue.use(message)
Vue.use(notification)

Vue.prototype.$confirm = Modal.confirm
Vue.prototype.$message = message
Vue.prototype.$notification = notification
Vue.prototype.$info = Modal.info
Vue.prototype.$success = Modal.success
Vue.prototype.$error = Modal.error
Vue.prototype.$warning = Modal.warning
