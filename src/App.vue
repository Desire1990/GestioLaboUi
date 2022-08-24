<template>
  <div id="app" class="flex flex-wrap h-screen">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <div class="main-sidebar">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import Footer from '@/components/footer.vue'
export default{
  components:{Footer},
  computed:{
    logged_in() {
      return this.$store.state.user != null;
    }
  },
  mounted(){
    var user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      this.$store.state.user = user;
    } else {
      console.warn("il y'a pas de session");
    }
  },
  watch:{
    "$store.state.user":{
      deep: true,
      handler(new_user){
        localStorage.setItem('user', JSON.stringify(new_user));
      }
    }
  },
};
</script>
<style scoped>
  body {
    background: darkseagreen;
     /*background: url(); */
    backdrop-filter: blur(10px);
    
}

</style>