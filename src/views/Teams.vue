<template>
  <div class="teams">
    <h1 class="subheading grey--text">Teams</h1>
    <v-container class="my-5">
    <v-layout>
      <v-flex xs12 sm6 md4 lg3 v-for="person in team" :key="person.name">
        <v-card elevation="2" outlined shaped tile flat class="text-xs-center ma-3">
          <v-responsive class="pt-4">
            <!-- <v-avatar size="100" class="grey lighten-2">
              <v-icon>{{ person.avatar }}</v-icon>
            </v-avatar> -->
              <v-avatar size="100">
                      <img src="../images/2pac.jpg" alt="">
              </v-avatar>
          </v-responsive>
          <v-card-text>
            <div class="subheading">{{ person.name }}</div>
            <div class="grey--text">{{ person.role }}</div>
          </v-card-text>
          <v-card-action>
            <v-btn flat color="grey">
              <v-icon small left>mdi-message</v-icon>
            </v-btn>
            <span>Message</span>
          </v-card-action>
        </v-card>
      </v-flex>
    </v-layout>
    </v-container>
  </div>
</template>

<script>

  export default {
    name: 'Teams',
    data(){
      return{
        team: [
        { name: 'The Net Ninja', role: 'Web developer',avatar:'../images/2pac.jpg' },
        { name: 'Ryu', role: 'Graphic designer' ,avatar:'mdi-account-check-outline'},
        { name: 'Chun Li', role: 'Web developer' ,avatar:'mdi-account-multiple-check'},
        { name: 'Gouken', role: 'Social media maverick' ,avatar:'mdi-account-plus-outline'},
        { name: 'Yoshi', role: 'Sales guru',avatar:'mdi-account-voice'}
      ]
      }
    }

  }
</script>
