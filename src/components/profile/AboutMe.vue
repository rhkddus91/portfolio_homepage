<template>
  <v-container fluid grid-list-md>
    <v-row>
      <v-col cols="12" sm="12" md="12" lg="12" xl="12">
        <v-card>
          <v-card-title class="headline mb-1">
            PROFILE
          </v-card-title>
          <img class="logo mb-5 mt-5" src="https://api.josns.net/assets/logo.png" />
          <v-card-subtitle class="pb-0 title mb-5">About Me</v-card-subtitle>
          <v-card-text class="text--primary">
            <dl>
              <dt>조광연</dt>
              <dd>1991년 7월 4일생</dd>
              <dd>신한대학교 산업디자인과 졸업</dd>
              <dd>UI / UX 디자인, Front-end 개발</dd>
              <dd>새로운 기술을 배우는 것에 거리낌이 없다.</dd>
            </dl>

          </v-card-text>
          <v-card-actions class="pa-5">
            <v-spacer></v-spacer>
              <v-btn rounded light color="primary"> 연락처 </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'AboutMe'
}
</script>

<style scoped>
.logo {
  max-width: 600px;
  width: 90%;
}
</style>
