<template>
    <nav>
        <v-toolbar flat app>
            <v-app-bar-nav-icon class="grey--text" @click="toggleDrawer"></v-app-bar-nav-icon>
            <v-toolbar-title class="text-uppercase grey--text">
                <span class="font-weight-light">Todo</span>
                <span>Ninja</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-menu offset-y>
                <template v-slot:activator="{on,attrs}">
                     <v-btn flat dark color="grey" v-bind="attrs" v-on="on">
                       <v-icon>mdi-chevron-down</v-icon>
                       <span>Menu</span>  
                     </v-btn>
                </template>
               <v-list>
                   <v-list-item v-for="link in links" :key="link.text">
                       <router-link :to="link.route">
                           <v-list-item-title>{{ link.text }}</v-list-item-title>
                       </router-link>
                   </v-list-item>
               </v-list>
            </v-menu>
            <v-btn flat color="grey">
                <span>Sign Out</span>
                <v-icon right>mdi-exit-to-app</v-icon>
            </v-btn>
        </v-toolbar>
        <v-navigation-drawer v-model="drawer" app class="success">
          <v-layout column align-center>
              <v-flex class="mt-5">
                  <v-avatar size="100">
                      <img src="../images/2pac.jpg" alt="">
                  </v-avatar>
                  <p class="white--text subheading mt-1">2 Pac Shakur</p>
              </v-flex>
          </v-layout>
           <v-list>
               <v-list-tile v-for="link in links" :key="link.text">
                   <router-link :to="link.route">
                    <v-list-tile-action>
                       <v-icon>{{link.icon}}</v-icon>
                   </v-list-tile-action>
                   <v-list-tile-content>
                       <v-list-tile-title class="white--text">{{link.text}}</v-list-tile-title>
                   </v-list-tile-content>
                   <v-divider></v-divider>
                   </router-link>
               </v-list-tile>
           </v-list>
        </v-navigation-drawer>
    </nav>
</template>
<script>
export default {
    name:'Navbar',
    data(){
        return{
            drawer:false,
            links:[
                {icon:'mdi-view-dashboard',text:'Dashboard', route:'/'},
                {icon:'mdi-folder',text:'My Projects', route:'/projects'},
                {icon:'mdi-microsoft-teams',text:'Team', route:'/team'}
            ]
        }
    },
    methods:{
        toggleDrawer(){
            return this.drawer=!this.drawer
        }
    }
}
</script>