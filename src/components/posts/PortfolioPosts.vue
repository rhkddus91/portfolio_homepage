<template>
<v-container fluid grid-list-md>
<v-row>
<v-col cols="12" sm="12" md="6" lg="3" xl="3"
v-for="post in posts" :key="post.id">
  <v-card>
    <v-img class="align-end white--text" height="200px" gradient="to top right, rgba(100,115,201,.9), rgba(25,32,72,.5)" :src="'https://api.josns.net/assets/image/'+post.listImage">
      <v-card-title class="headline mb-1">
        {{post.postTitle}}
      </v-card-title>
    </v-img>
    <v-card-subtitle class="pb-0 title mb-5">소개</v-card-subtitle>
    <v-card-text class="text--primary" v-html="post.postContents">
    </v-card-text>
    <v-card-actions class="pa-5">
      <v-spacer></v-spacer>
        <v-btn rounded light color="primary">GitHub </v-btn>
        <v-btn rounded light color="primary" @click="dialogOpen(post)"> 상세보기 </v-btn>
        <v-btn rounded light color="error" @click="deletePost(post)" v-if="isAuthorized"> 삭제 </v-btn>
    </v-card-actions>
  </v-card>

  <v-dialog v-model="dialog" v-if="dialogPost != null">
   <v-btn @click="dialogClose" light color="error">닫기</v-btn>
   <v-card>
    <v-img class="align-end ma-auto" max-width="600px" :src="'https://api.josns.net/assets/image/'+dialogPost.detailsImage">
     <v-card-title
         class="headline lighten-2 d-inline-block"
         primary-title
       >
        {{dialogPost.postTitle}}
       </v-card-title>
      </v-img>
     <v-divider class='mb-5'></v-divider>
     <v-card-text v-html="dialogPost.postContents">
     </v-card-text>
     <v-divider></v-divider>
     <v-card-actions>
       <v-spacer></v-spacer>
       <v-btn rounded light color="primary">GitHub </v-btn>
       <v-btn @click="dialogClose" rounded light color="error">닫기</v-btn>
     </v-card-actions>
   </v-card>
 </v-dialog>

</v-col>
</v-row>
</v-container>

</template>

<script>
export default {
  name: 'PortfolioPosts',
  props: {
    posts: {
      type: Array
    },
    isAuthorized: {
      type: Boolean
    }
  },
  data () {
    return {
      dialog: false,
      dialogPost: null
    }
  },
  methods: {
    dialogOpen (post) {
      this.dialog = true
      this.dialogPost = post
    },
    dialogClose () {
      this.dialog = false
      this.dialogPost = null
    },
    deletePost (payload) {
      this.$emit('deletePost', payload)
    }
  }
}
</script>
