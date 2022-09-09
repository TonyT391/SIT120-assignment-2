Vue.component('component-a', { test1 })
Vue.component('component-b', { test2 })
Vue.component('component-c', { test3 })

new Vue({ el: '#app' })

var ComponentA = { testlocal1 }
var ComponentB = { testlocal2 }
var ComponentC = { testlocal3 }

new Vue({
    el: '#app',
    components: {
      'component-a': ComponentA,
      'component-b': ComponentB
    }
  })