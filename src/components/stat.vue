<template>
    <div id="pop-wrap">
        <h1 class="pop-up">Light Mode Activated</h1>
    </div>
    <div class="switch" id="switch">
        <div id="toggle" @click='toggled'>
            <i class="fas fa-moon"></i>
            <i class="fas fa-sun"></i>
            <i class="indicator"></i>

        </div>
    </div>
    <div class="cards">
        <div class="card-single">
            <div>
                <h1 id="customer"></h1>
                <span>Happy Clients</span>
            </div>
            <div>
                <span class="fas fa-users"></span>
            </div>
        </div>
        <div class="card-single">
            <div>
                <h1 id="project"></h1>
                <span>Projects Done!</span>
            </div>
            <div>
                <span class="fas fa-clipboard"></span>
            </div>
        </div>
        <div class="card-single">
            <div>
                <h1 id="order"></h1>
                <span>Confirmed Orders</span>
            </div>
            <div>
                <span class="fas fa-shopping-bag"></span>
            </div>
        </div>
        <div class="card-single">
            <div>
                <h1><sup>$</sup>
                    <p id="income"><b>k</b></p>
                </h1>
                <span>weekly Income</span>
            </div>
            <div>
                <span class="fab fa-google-wallet"></span>
            </div>
        </div>
    </div>
</template>
<script>
	import Main from "../components/main.vue"
	import Footer from "../components/footer.vue"
	export default{
		components:{Main, Footer},
		data(){
			return{

			}
		},
		mounted(){
			if(media.matches){
					console.log(true)
					$('#dashboard').mouseenter(function(){
					this.innerHTML = `good
				    ${welcome}`;
					});
					$('#dashboard').mouseleave(function(){
						this.innerHTML = "DASHBOARD";
					});
					$('#kleenpulse').mouseenter(function(){
						this.innerHTML = "welcome";
					});
					$('#kleenpulse').mouseleave(function(){
						this.innerHTML = "LiquidTime";
					});
					}else{
						console.log(false)
					}

		},
		methods:{
			toggled(){
				const body = document.querySelector('body');
				const toggles = document.getElementById('toggle');
				const media = window.matchMedia("(min-width:700px)")
				body.classList.toggle('light');
				toggles.classList.toggle('active')
			}
		}
			


	}
</script>