<template>
  <v-container fluid grid-list-md>
    <v-btn rounded light color="error" @click="signout"> 로그아웃 </v-btn>
    <v-row>
      <v-col cols="12" sm="12" md="12" lg="12" xl="12">
        <v-card>
          <v-card-title class="headline mb-1">
            UPLOAD
          </v-card-title>
          <v-card-text class="text--primary">
            <p>
              <label for="listImage">리스트 이미지</label><br />
              <input type="file"
                id="listImage"
                ref="listImage"
                v-on:change="selectImage('list')"
                accept="image/*"
              />
            </p>
            <p>
              <label for="detailsImage">상세보기 이미지</label><br />
              <input type="file"
                id="detailsImage"
                ref="detailsImage"
                v-on:change="selectImage('details')"
                accept="image/*"
              />
            </p>
            <v-text-field
              id="postTitle"
              label="제목"
              name="postTitle"
              type="text"
              v-model="postTitle"
            />
            <v-textarea
              id="postContents"
              label="내용"
              name="postContents"
              type="text"
              v-model="postContents"
            />
          </v-card-text>
          <v-card-actions class="pa-5">
            <v-spacer></v-spacer>
              <v-btn rounded light color="primary" @click="uploadPost"> 게시물 업로드 </v-btn>
              <v-btn rounded light color="error" @click="reload"> 초기화 </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'UpLoad',
  data () {
    return {
      listImage: null,
      detailsImage: null,
      postTitle: '',
      postContents: '',
    }
  },
  methods: {
    signout () {
      this.$emit('signout')
    },
    reload () {
      this.listImage = null
      this.detailsImage = null
      this.postTitle = ''
      this.postContents = ''
      this.$refs.listImage.value = ''
      this.$refs.detailsImage.value = ''
    },
    selectImage (type) {
      console.log(this.$refs)
      if(type === "list") {
        if (this.$refs.listImage.files) {
          this.listImage = this.$refs.listImage.files[0]
          console.log(this.listImage)
        } else {
          console.log('error')
        }
      } else if (type === "details") {
        if (this.$refs.detailsImage.files) {
          this.detailsImage = this.$refs.detailsImage.files[0]
          console.log(this.detailsImage)
        } else {
          console.log('error')
        }
      }
    },
    uploadPost () {
      if (this.postTitle.length <= 0 || this.postContents.length <= 0 || this.listImage.length <= 0 || this.detailsImage.length <= 0) {
        alert('모든 내용을 입력하고 시도해주세요.')
        return false
      }

      const formData = new FormData()
      formData.append('imgArr', this.listImage)
      formData.append('imgArr', this.detailsImage)
      formData.append('postTitle', this.postTitle)
      formData.append('postContents', this.postContents)

      for (let key of formData.entries())
      {
        console.log(`${key}`)
      }

      this.$emit('uploadPost', formData)

      this.reload()
    }
  }
}
</script>
