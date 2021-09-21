<template>
  <v-app>
    <v-main>
      <v-container fill-height>
        <v-row class="text-center" align="center" justify="center">
          <v-col cols="12" class="mb-4 mt-5">
            <h1 class="display-3 mb-3" id="title">
              나만의 별 찾기
            </h1>
          </v-col>
          <v-col cols="12" class="mb-4 mt-7">
            <p class="subheading font-weight-regular" id="description">
              밤하늘을 빛내고 있는 별들 중<br> 나만의 별을 찾아보자!
            </p>
          </v-col>
        </v-row>
        <v-row class="text-center" align="end" justify="center">
          <v-col cols="12" class="mb-4">
            <div class="my-3">
                <v-btn
                  color="error"
                  dark
                  x-large
                  id="startBtn"
                  to="/input"
                >
                  시작하기
                </v-btn>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <footer>
      <intro-footer/>
    </footer>
  </v-app>
</template>
<script>
import IntroFooter from '@/components/IntroFooter.vue'

export default {
  components: {
    'IntroFooter': IntroFooter
  },
  created() {
    localStorage.clear();
  }
}
</script>
<style scoped>
 #title {
  color: #C5CAE9;
  font-family: 'Nanum Pen Script', cursive !important;
  font-weight: 500;
  font-size: 5rem !important;
 }

 #description{
  color: #e9eaf5;
  font-family: 'Gowun Batang', serif !important;
  font-size: 1.4rem !important;
  font-weight: 300;
 }

#startBtn {
  font-family: 'Jua', sans-serif !important;
  font-size: 1.5rem;
}
</style>