<template>
<navbar/>
<headnav/>
<carruselV/>
<Productos/>

</template>

<script>

import navbar from '../components/NavBar.vue'
import headnav from '../components/HeadNav.vue'
import carruselV from '../components/Carruserl.vue'
import Productos from '@/components/Productos.vue';
export default {
  name: 'HomeView',
  components: {
    navbar,
    headnav,
    carruselV,
    Productos
},
  
}
</script>
