<template>
  <v-app-bar
      app
      color="primary"
      light
    >
     <v-tabs
       slider-color="yellow"
       color="secondary"
       grow
       show-arrows
       centered
     >
       <v-tab :to="{ name: 'ProfilePage' }">
         Profile
       </v-tab>
       <v-tab :to="{ name: 'PortfolioPage' }">
         Portfolio
       </v-tab>
       <v-tab :to="{ name: 'ContactPage' }">
         Contact
       </v-tab>
       <v-tab :to="{ name: 'AdminPage' }">
         Admin
       </v-tab>
     </v-tabs>
</v-app-bar>
</template>

<script>
export default {
  name: 'AppHeader',
  data () {
    return {
      dialog: false,
      drawer: false
    }
  }
}
</script>

<style scoped>
.v-slide-group__prev {
display: none !important;
}
</style>
