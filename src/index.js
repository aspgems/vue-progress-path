// import { setOptions } from './options'

import Progress from './components/Progress.vue'

export let globalOptions = {}

export {
	Progress,
}

function registerComponents (Vue, prefix) {
	Vue.component(`${prefix}progress`, Progress)
}

const plugin = {
	// eslint-disable-next-line no-undef
	version: VERSION,
	install (Vue, options) {

	  globalOptions = {
      installComponents: true,
      componentsPrefix: 'loading-',
      defaultShape: 'circle',
    };

	  if (options){
      for (var key in options) {
        globalOptions[key] = options[key];
      }
    }

		if (globalOptions.installComponents) {
			registerComponents(Vue, globalOptions.componentsPrefix)
		}
	},
}

export default plugin

// Auto-install
let GlobalVue = null
if (typeof window !== 'undefined') {
	GlobalVue = window.Vue
} else if (typeof global !== 'undefined') {
	GlobalVue = global.Vue
}
if (GlobalVue) {
	GlobalVue.use(plugin)
}
