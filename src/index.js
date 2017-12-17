/**
 * @author licat
 * @date 17/12/15
 */

import CountDownButton from './components/CountDownButton'
import pkg from '../package.json'

const install = function (Vue) {
  Vue.component(CountDownButton.name, CountDownButton)
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
let main = {
  version: pkg.version,
  install
}
export {
  main as default,
  CountDownButton
}
