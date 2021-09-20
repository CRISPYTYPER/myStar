<template>
  <v-app>
    <v-main>
      <v-container fill-height>
        <v-row class="text-center" align="center" justify="center">
          <v-col cols="12" class="mb-4 mt-5">
            <input type="text" v-model="name">
            <input type="text" v-model="birthDay">
          </v-col>
        </v-row>
        <v-row class="text-center" align="end" justify="center">
          <v-col cols="12" class="mb-4">
            <div class="my-3">
                <v-btn
                  color="error"
                  dark
                  x-large
                  id="confirmBtn"
                  v-on:click="clickConfirm"
                >
                  확인하기
                </v-btn>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
  export default {
    data() {
      return {
        name: '',
        birthDay: ''
      }
    },
    methods: {
      clickConfirm() {
        localStorage.setItem('name',this.name);
        localStorage.setItem('birthDay',this.birthDay);
      }
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

#confirmBtn {
  font-family: 'Jua', sans-serif !important;
  font-size: 1.5rem;
}
</style>