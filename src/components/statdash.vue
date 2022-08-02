<template>
	<div class="main-wrapper">
    <div class="main-content">
    	<main>
    		<Stat/>
    	    <Main/>
    		<Footer/>
    	</main>
        </div>
    </div>

</template>
<script>
	import Main from "../components/main.vue"
	import Footer from "../components/footer.vue"
	import Stat from "../components/stat.vue"
	export default{
		components:{Main, Footer, Stat},
	}
</script>
