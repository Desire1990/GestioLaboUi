<template>
	<div id="vue">
	  <h1>Sélectionnez un domaine ci-contre</h1>
	  <!-- <input class="search" placeholder="Search a title, description, or category" v-model="liveSearchString" /> -->
	  <div class="loading" v-show="loading"></div>
	  <div class="images-wrapper" v-show="!loading">
	    <transition-group name="image-wrapper" tag="div" class="images-inner">
	      <div class="image-wrapper" v-for="(image, i) in domains.results" :key="image.id + i">
	        <div class="image-img">
	        <!-- <div class="image-img" :style="{ background: 'url(' + image.url + ')' }"> -->
	        <img :src=" 'http://127.0.0.1:8000' + image.get_thumbnail" class="card-img-top" alt="image.name" />
	        </div>
          <!-- <img :src=" 'https://redgoldinvest.com' + paquage.get_thumbnail" class="card-img-top" alt="paquage.name" /> -->
	        <div class="image-details">
	          <h3 class="image-title">{{ image.name }}</h3>
	          <!-- <p class="image-description"><span></span>{{ image.id}}<span></span></p> -->
	          <!-- <p class="image-category">{{ image.name }}</p> -->
	        </div>
	      </div>
	    </transition-group>
	  </div>
<!-- 	  <div class="load-wrapper" v-show="!loading && liveSearchString == ''">
	    <div class="button-wrapper" v-if="!allLoaded">
	      <button @click="showMore()">Load More</button>
	    </div>
	    <p v-else>ALL LOADED</p>
	  </div> -->
	  <!-- <div id="imageLoaderDock" style="display: none"></div> -->
	</div>
</template>
<script>
import axios from 'axios'
export default{
  data() {
    return {
      loading: false,
      imagesLimit: 15,
      allLoaded: false,
      liveSearchString: '',
      domains:this.$store.state.domains,
    }
  },
    mounted() {
    axios.get(this.$store.state.url + "/domain/",this.header)
        .then(res => {
          this.domains = res.data
          console.log(res.data)
        })
        .catch(err => {
            console.error(err); 
        })
    },  
    computed:{
          header(){
              return{
          headers :{
            "Authorization" : `Bearer ${this.$store.state.user.access}`
          },
        }
      },
  },
}
	
</script>
<style scoped>
@import url(https://fonts.googleapis.com/css?family=Roboto:100,400,700);
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Roboto";
}
@keyframes spin {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(359deg);
  }
}
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(50%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
h1 {
  margin: 24px 16px 0;
  text-align: center;
}
input.search {
  display: block;
  appearance: none;
  margin: 8px auto 16px;
  padding: 8px;
  padding-left: 2px;
  vertical-align: middle;
  border: 1px solid transparent;
  border-bottom: 1px solid black;
  border-radius: 2px;
  color: black;
  background: transparent;
  font-size: 16px;
  width: 90%;
  width: calc(100% - 16px);
  max-width: 300px;
  outline: 0;
}
.loading {
  width: 36px;
  height: 36px;
  margin: 30px auto;
  transform: rotate(0deg);
  animation: spin 0.6s infinite linear;
  border: 4px solid white;
  border-top: 4px solid black;
  border-radius: 50%;
  stroke: white;
}
@media (max-width: 551px) {
  .loading {
    width: 24px;
    height: 24px;
    border: 2px solid white;
    border-top: 2px solid black;
  }
}
.images-wrapper {
  margin: 0 auto;
  max-width: 1280px;
}
.images-wrapper .images-inner {
  display: flex;
  flex-wrap: wrap;
  margin: 0;
}
.images-wrapper .images-inner .image-wrapper {
  position: relative;
  display: flex;
  width: calc(100% - 1em);
  height: 230px;
  margin: 16px 16px 8px;
  cursor: pointer;
  transition: all 0.25s;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.25);
  overflow: hidden;
}
.images-wrapper .images-inner .image-wrapper-move {
  transition: all 600ms ease-in-out 50ms;
}
.images-wrapper .images-inner .image-wrapper-enter-active {
  transition: all 300ms ease-out;
}
.images-wrapper .images-inner .image-wrapper-leave-active {
  transition: all 200ms ease-in;
  position: absolute;
  z-index: 0;
}
.images-wrapper .images-inner .image-wrapper-enter, .images-wrapper .images-inner .image-wrapper-leave-to {
  opacity: 0;
}
.images-wrapper .images-inner .image-wrapper-enter {
  transform: scale(0.9);
}
.images-wrapper .images-inner .image-wrapper .image-img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 150%;
  z-index: -1;
  background-size: cover !important;
  background-position: center !important;
  transition: transform 200ms ease-out, blur 200ms ease-out;
  animation: fadeIn 200ms;
}
.images-wrapper .images-inner .image-wrapper .image-details {
  align-self: flex-end;
  background-color: white;
  width: 100%;
  padding: 16px;
}
.images-wrapper .images-inner .image-wrapper .image-details .image-title {
  transition: color 250ms;
}
.images-wrapper .images-inner .image-wrapper .image-details .image-description {
  display: none;
  opacity: 0;
  max-height: 0px;
  overflow: hidden;
  transition: max-height 125ms;
  animation: slideUp 300ms;
  animation-delay: 50ms;
  animation-fill-mode: backwards;
}
.images-wrapper .images-inner .image-wrapper .image-details .image-description span {
  display: block;
}
.images-wrapper .images-inner .image-wrapper .image-details .image-description span:nth-of-type(1) {
  height: 5px;
}
.images-wrapper .images-inner .image-wrapper .image-details .image-description span:nth-of-type(2) {
  height: 25px;
}
.images-wrapper .images-inner .image-wrapper .image-details .image-category {
  font-weight: bold;
  margin-top: 2px;
  color: #b0b0b0;
}
@media (min-width: 768px) {
  .images-wrapper .images-inner .image-wrapper {
    margin-bottom: 16px;
    width: calc(50% - 32px);
  }
}
@media (min-width: 1025px) {
  .images-wrapper .images-inner .image-wrapper {
    width: calc(33% - 32px);
  }
  .images-wrapper .images-inner .image-wrapper:hover .image-img {
    transform: scale(1.3);
    filter: blur(5px);
  }
  .images-wrapper .images-inner .image-wrapper:hover .image-title {
    transition: color 250ms;
    color: #ea0000;
  }
  .images-wrapper .images-inner .image-wrapper:hover .image-description {
    display: block;
    opacity: 1;
    max-height: 500px;
    transition: max-height 250ms ease-in;
  }
}
.load-wrapper {
  position: relative;
  margin: 16px auto;
  text-align: center;
  max-width: 1280px;
}
.load-wrapper:after {
  content: "";
  position: absolute;
  left: 0;
  top: 50%;
  height: 1px;
  width: 100%;
  background: #d2d2d2;
  z-index: -1;
  margin: 0 16px;
}
.load-wrapper .button-wrapper {
  display: inline-block;
  background: white;
  padding: 0 32px;
}
.load-wrapper .button-wrapper button {
  padding: 10px 32px;
  font-size: 14px;
  font-weight: bold;
  border: 1px solid #d2d2d2;
  border-radius: 0;
  color: #d2d2d2;
  appearance: none;
  background: transparent;
  cursor: pointer;
  text-transform: uppercase;
}
.load-wrapper .button-wrapper button:hover {
  border-color: #b0b0b0;
  color: #b0b0b0;
}
.load-wrapper .button-wrapper button:active {
  color: white;
  background: black;
}
.load-wrapper p {
  background: white;
  font-style: italic;
  display: inline-block;
  padding: 0 32px;
  color: #b0b0b0;
}

</style>