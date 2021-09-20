<template>
  <v-app>
    <v-main>
      <v-container fill-height>
        <v-row class="text-center" align="center" justify="center">
          <v-col cols="12" class="mb-4 mt-5">
            <p class="subheading font-weight-regular" id="description">
              밤하늘을 빛내고 있는 별들 중<br> 나만의 별을 찾아보자!
            </p>
          </v-col>
          <v-col cols="12" sm="6" class="mb-4 mt-5" >
            <v-form ref="form" lazy-validation v-model="valid">
                <!-- <input type="text" v-model="name" placeholder="이름"> -->
                <v-text-field
                  label="이름"
                  placeholder="예) 김홍도"
                  single-line
                  outlined
                  v-model="name"
                  background-color="white"
                  :rules="nameRules"
                  required
                  id="nameField"
                ></v-text-field>
                <!-- <input type="text" v-model="birthDay" placeholder="생년월일" v-on:keyup.enter="clickConfirm"> -->
                <v-text-field
                  label="생년월일"
                  placeholder="예) 950101"
                  single-line
                  outlined
                  v-model="birthDay"
                  background-color="white"
                  :rules="birthDayRules"
                  required
                  id="birthDayField"
                ></v-text-field>
              </v-form>
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
        valid: true,
        name: '',
        birthDay: '',
        nameRules: [
        v => !!v || '이름을 입력해주세요.',
        v => isNaN(v) || '이름을 입력해주세요.',
        ],
        birthDayRules: [
        v => !!v || '생년월일을 입력해주세요.',
        v => !isNaN(v) || '숫자를 입력해주세요.',
        v => v.length == 6 || '6자리로 입력해주세요.'
        ]
      }
    },
    methods: {
      clickConfirm() {
        const validate = this.$refs.form.validate();
        if(validate){
          const name = this.name && this.name.trim();
          const birthDay = this.birthDay && this.birthDay.trim();
          localStorage.setItem('name', name);
          localStorage.setItem('birthDay', birthDay);
          this.clearInput();
          this.$router.push('/result');
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