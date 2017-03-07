import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [{
  path: '/',
  name: 'Hello',
  // asyn load components, better in mobile app client
  component (resolve) {
    require(['../components/Hello'], resolve)
  }
}]

const router = new Router({
  routes
})

export default router
