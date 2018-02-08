import Vue from 'vue'
import Vuex from 'vuex'
import { state, mutations} from './mutations'
import plugins from './plugins'

Vue.use(Vuex)

const test_Object = {state,mutations,plugins}

export default new Vuex.Store(test_Object)

// export default new Vuex.Store({
//     state,
//     mutations,
//     plugins
// })




