<template>
	 <input type="checkbox" id="nav-toggle">
    <!-- side bar    -->
    <div class="sidebar">
            <div class="sidebar-brand">
                <h2><span><i class="fab fa-accusoft"></i></span><span id="kleenpulse">Gestion Lab</span></h2>
            </div>
            <div class="sidebar-menu">
                <ul>
                    <li>
                     <router-link to="/" class="nav-item nav-link active" ><span class="fas fa-users"></span><strong>Dashboard</strong></router-link>
                    </li>

                    <li>
                     <router-link to="/about" class="nav-item nav-link active"><span class="fas fa-users"></span><strong>Customers</strong></router-link>
                    </li>
                    
                    <li>
                     <router-link to="/" class="nav-item nav-link active"><span class="fas fa-clipboard-list"></span><strong>Projects</strong></router-link>
                    </li>
                    
                    <li>
                     <router-link to="/" class="nav-item nav-link active"><span class="fas fa-shopping-bag"></span>
                            <strong>Orders</strong></router-link>
                    </li>
                    
                    <li>
                     <router-link to="/" class="nav-item nav-link active"><span class="fas fa-receipt"></span><strong>Inventory</strong></router-link>
                    </li>
                    
                    <li>
                     <router-link to="/" class="nav-item nav-link active"><span class="fa fa-user-circle"></span><strong>Accounts</strong></router-link>
                    </li>
                    <li>
                     <router-link to="/" class="nav-item nav-link active"><span class="fas fa-clipboard"></span><strong>Task</strong></router-link>
                    </li>
                </ul>
            </div>
    </div>
    <!-- side -->
	
</template>
<script>
	export default{
		data(){
			return{

			}
		},
	}
</script>