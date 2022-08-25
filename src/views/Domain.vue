<template>
    <div class="main-wrapper">
      <div class="main-content">
      <main>
        <div class="about">
          <domain/>
        </div>
        <top/>
        <side/>
        <Footer/>
      </main>
    </div>
  </div>
</template>
<script>
  import Main from "../components/main.vue"
  import Footer from "../components/footer.vue"
  import side from '@/components/sidebar.vue'
  import top from '@/components/topbar.vue'
  import Stat from "../components/stat.vue"
  import domain from "../components/domains.vue"
  export default{ 
    components:{Main, Footer, Stat, top,side, domain},
    mounted() {
        document.title = 'Dashboard | Gestion Labo'
    },
  }
</script>
<style>
   
</style>
