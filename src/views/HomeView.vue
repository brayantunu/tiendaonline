<template>
<navbar/>
<headnav/>
<carruselV/>

</template>

<script>

import navbar from '../components/NavBar.vue'
import headnav from '../components/HeadNav.vue'
import carruselV from '../components/Carruserl.vue'
export default {
  name: 'HomeView',
  components: {
    navbar,
    headnav,
    carruselV,
  },
  
}
</script>
