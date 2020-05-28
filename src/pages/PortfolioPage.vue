<template>
  <v-content>
    <portfolio-posts :posts="posts" :isAuthorized="isAuthorized" @deletePost="deletePost"></portfolio-posts>
  </v-content>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import PortfolioPosts from '@/components/posts/PortfolioPosts'

export default {
  name: 'ProfilePage',
  components: {
    PortfolioPosts
  },
  created() {
    this.fetchPost()
  },
  computed: {
    ...mapGetters({
      posts: 'getPosts',
      isAuthorized: 'isAuthorized'
    })
  },
  methods: {
    ...mapActions({
      fetchPost: 'fetchPost',
      deletePost: 'deletePost'
    })
  }
}
</script>
