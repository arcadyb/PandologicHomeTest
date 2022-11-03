<template>
HOME
</template>

<script>

import { computed, onMounted, onUpdated, onUnmounted } from 'vue'
import { useStore, mapGetters } from 'vuex'

export default {
  name: 'ChartBox',
  components: {
 
  },
  props: {
    //id: String

  },
  data () {
    return {
     // dtseries: {}
    }
  },
  computed: {
    // mix the getters into computed with object spread operator
  },
  setup (props) {
    //const store = useStore()

    // eslint-disable-next-line @typescript-eslint/no-this-alias

    onMounted(() => {
      //    store.dispatch('symbolmodule/GET_REQUEST', { symbol: 'usd' })
    })
    // const doughnutChart = computed(() => store.state.doughnutChart)

    return {
      // doughnutChart,
      // selectedSymbol: computed(() => store.state.symbolmodule.selectedSymb)

    }
  }
}
</script>
