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
          <v-col cols="12" sm="6" class="mb-4 mt-5" >
              <!-- <input type="text" v-model="name" placeholder="이름"> -->
              <v-text-field
                label="이름"
                placeholder="예)김홍도"
                single-line
                outlined
                v-model="name"
                background-color="white"
              ></v-text-field>
              <!-- <input type="text" v-model="birthDay" placeholder="생년월일" v-on:keyup.enter="clickConfirm"> -->
              <v-text-field
                label="생년월일"
                placeholder="예)950101"
                single-line
                outlined
                background-color="white"
              ></v-text-field>
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
        if(this.name !== "" && this.birthDay !== ""){
          const name = this.name && this.name.trim();
          const birthDay = this.birthDay && this.birthDay.trim();
          localStorage.setItem('name', name);
          localStorage.setItem('birthDay', birthDay);
          this.clearInput();
        }
      },
      clearInput() {
        this.name = '';
        this.birthDay = '';
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
#confirmBtn {
  font-family: 'Jua', sans-serif !important;
  font-size: 1.5rem;
}


</style>