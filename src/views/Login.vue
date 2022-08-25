<template  >
<center>
    <div class="col-md-6" >
        <div class="vertical-center ">
            <div class="inner-block">
                <form class="login">
                    <center>
                        <h1>Sign In</h1>
                    </center>

                    <div class="form-group">
                        <label><h3>Username</h3></label>
                        <input type="email" name="email" placeholder="email" class="form-control form-control-lg" required id="id_mail" v-model='username' autocomplete="on" />
                    </div>

                    <div class="form-group">
                        <label><h3>Password</h3></label>
                        <input type="password" placeholder="password" class="form-control form-control-lg" name="password" required id="id_password" v-model='password' autocomplete="on" />
                    </div>
                    <label for="id_password" v-if='logs.length>0' style="color:red">{{logs}}</label>

                    <button type="submit" class="btn btn-dark btn-lg btn-block" @click.prevent='login'>Sign In</button>

                    <p class="forgot-password text-right mt-2 mb-4">
                        <router-link to="/forgot-password"><strong>Forgot password ?</strong></router-link>
                    </p>

                    <div class="social-icons">
                        <ul>
                            <li><a href="#"><i class='fa fa-google'></i></a></li>
                            <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                            <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                        </ul>
                    </div>
                    <center>
                Developped by <b><a href="https://github.com/Desire1990">Desos</a></b>
                    </center>

                </form>
            </div>
        </div>
    </div>
</center>
</template>

<script>
import axios from 'axios'
import { toast } from 'bulma-toast'
export default {
    data() {
        return {
            logs:'',
            username:'',
            password:'',
            url:this.$store.state.url           
        }
    },
    mounted() {
        document.title = 'Sign in | Red Gold Invest'
    },
    methods:{ 
        login(){
            this.logs = "loging in..."
            axios.post(this.url+"/login/", {
                "username": this.username,
                "password": this.password
            }).then((response) => {
                this.$store.state.user = response.data;
                const toPath = this.$route.query.to || '/dashboard'
                this.$router.push(toPath)
                toast({
                    message: 'logged in successfully!',
                    type: 'is-success',
                    dismissible: true,
                    duration: 2000,
                    position: 'center'
                })
                this.$router.push('/dashboard')
            }).catch((error) => {
                if (!error.response) {
                    this.logs = JSON.stringify(error.response.data)
                } else {
                    this.logs = "Invalid username or password...";
                }
            });
        }
    }
};
</script>
<style>
    * {  box-sizing: border-box;}body {  background: # !important;  min-height: 100vh;  font-weight: 400;}body,html,.App,.vue-tempalte,.vertical-center {  width: 100%;  height: 100%;}.navbar-light {  background-color: #2554FF;  box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);}.vertical-center {  display: flex;  text-align: left;  justify-content: normal;  flex-direction: column;    }.inner-block {  width: 500px;  margin: auto;  margin-top: 50px;  padding: auto;  background: #ffffff;  box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);  padding:55px 55px 55px 55px;  border-radius: 15px;  transition: all .3s;}.vertical-center .form-control:focus {  border-color: #2554FF;  box-shadow: none;}.vertical-center h3 {  text-align: center;  margin: 0;  line-height: 1;  padding-bottom: 20px;}label {  font-weight: 500;}.forgot-password,.forgot-password a {  text-align: right;  font-size: 13px;  padding-top: 10px;  color: #7a7a7a;  margin: 0;}.forgot-password a {  color: #2554FF;}.social-icons {  text-align: center;  font-family: "Open Sans";  font-weight: 300;  font-size: 1.5em;  color: #222222;}.social-icons ul {  list-style: none;  margin: 0;  padding: 0;}.social-icons ul li {  display: inline-block;  zoom: 1;  width: 65px;  vertical-align: middle;  border: 1px solid #e3e8f9;  font-size: 15px;  height: 40px;  line-height: 40px;  margin-right: 5px;  background: #f4f6ff;}.social-icons ul li a {  display: block;  font-size: 1.4em;  margin: 0 5px;  text-decoration: none;}.social-icons ul li a i {  -webkit-transition: all 0.2s ease-in;  -moz-transition: all 0.2s ease-in;  -o-transition: all 0.2s ease-in;  -ms-transition: all 0.2s ease-in;  transition: all 0.2s ease-in;}.social-icons ul li a:focus i,.social-icons ul li a:active i {  transition: none;  color: #222222;}.logout{  border-radius: 0;  position: relative;  top:50px;  right: 0;  font-weight: bold;  margin: 0;  background-color: #955;  z-index: 2;}body,#body {  background: #fff; margin: 0;  padding: 0;  height: 100%;}
</style>