<template>
  <v-container class="fill-height" fluid>
  <v-col align="center" justify="center" cols="12">
  <v-col cols="12" sm="8" md="6" lg="4" xl="4">
    <about-me></about-me>
  </v-col>
  </v-col>
  </v-container>
</template>

<script>
import AboutMe from '@/components/profile/AboutMe'
export default {
  name: 'ProfilePage',
  components: {
    AboutMe
  }
}
</script>

<style scoped>

</style>
