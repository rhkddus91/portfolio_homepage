<template>
  <form @submit.prevent="submit">
    <v-col cols="6" sm="6" md="6" class="headline mb-1">
      관리자 로그인
    </v-col>
    <v-card-text>
       <v-form>
         <v-text-field
           id="email"
           label="아이디"
           name="email"
           prepend-icon="mdi-account"
           type="text"
           v-model="email"
         />
         <v-text-field
           id="password"
           label="비밀번호"
           name="password"
           prepend-icon="mdi-lock"
           type="password"
           v-model="password"
         />
       </v-form>
     </v-card-text>
     <v-card-actions>
       <v-btn block rounded light color="primary" type="submit" >로그인</v-btn>
     </v-card-actions>
  </form>
</template>
<script>
export default {
  name: 'LogIn',
  data () {
   return {
     email: '',
     password: ''
   }
  },
  methods: {
   submit () {
     const { email, password } = this
     this.$emit('submit', { email, password })
   }
  }
}
</script>
