import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _14facfd8 = () => interopDefault(import('..\\pages\\layout' /* webpackChunkName: "" */))
const _64fa1d0d = () => interopDefault(import('..\\pages\\home' /* webpackChunkName: "" */))
const _3a81ccfb = () => interopDefault(import('..\\pages\\login' /* webpackChunkName: "" */))
const _7a694abb = () => interopDefault(import('..\\pages\\profile' /* webpackChunkName: "" */))
const _64001d51 = () => interopDefault(import('..\\pages\\settings' /* webpackChunkName: "" */))
const _092bf61b = () => interopDefault(import('..\\pages\\editor' /* webpackChunkName: "" */))
const _61338e08 = () => interopDefault(import('..\\pages\\article' /* webpackChunkName: "" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _14facfd8,
    children: [{
      path: "",
      component: _64fa1d0d,
      name: "home"
    }, {
      path: "/login",
      component: _3a81ccfb,
      name: "login"
    }, {
      path: "/register",
      component: _3a81ccfb,
      name: "register"
    }, {
      path: "/profile/:username",
      component: _7a694abb,
      name: "profile"
    }, {
      path: "/settings",
      component: _64001d51,
      name: "settings"
    }, {
      path: "/editor/:slug?",
      component: _092bf61b,
      name: "editor"
    }, {
      path: "/article/:slug",
      component: _61338e08,
      name: "article"
    }]
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
