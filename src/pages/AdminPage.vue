<template>
  <v-container class="fill-height" fluid>
  <v-col align="center" justify="center" cols="12">
  <v-col cols="12" sm="8" md="6" lg="4" xl="4">
  <up-load v-if="isAuthorized" @signout="signout" @uploadPost="uploadPost"></up-load>
  <log-in v-else-if="!isAuthorized" @submit="submit" ></log-in>
  <v-spacer></v-spacer>
  </v-col>
  </v-col>
   </v-container>
</template>

<script>
import LogIn from '@/components/login/LogIn'
import UpLoad from '@/components/admin/UpLoad'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'AdminPage',
  components: {
    LogIn,
    UpLoad
  },
  computed: {
    ...mapGetters({
      isAuthorized: 'isAuthorized',
      me: 'getMe'
    })
  },
  methods: {
    ...mapActions({
      signin: 'signin',
      signout: 'signout',
      uploadPost: 'uploadPost'
    }),
    submit (payload) {
      const { email, password } = payload
      this.signin(payload, { email, password })
    }
  }
}
</script>

<style scoped>

</style>
