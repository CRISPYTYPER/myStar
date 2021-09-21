<template>
  <v-app>
    <v-main>
      <v-container fill-height>
        <v-row class="text-center" align="center" justify="center">
          <v-col cols="12">
            <p class="subheading font-weight-regular" id="loadingMessage">
              당신의 별을 찾고 있습니다.
            </p>
            <v-progress-circular
            indeterminate
            color="white"
            :size="60"
          ></v-progress-circular>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
  import axios from 'axios';
  const convert = require('xml-js')
  import { findCustomStar } from '@/assets/javascripts/starFind.js'
  export default {
    data() {
      return {
        xmlContent: null,
        xmlError: false,
        dataList: [],
        userName: '',
        userBirthDay: '',
        userStarObject: {}
      }
    },
    created() {
      if(localStorage.getItem('name') === null || localStorage.getItem('birthDay') === null) {
        this.$router.push({ path: "/" });
      }
      this.userName = localStorage.getItem('name');
      this.userBirthDay = localStorage.getItem('birthDay');
      this.loadData(); //xml 파일 불러와 dataList변수에 javascript 변수 저장
    },
    methods: {
      loadData() {
        axios.get('/data/starData.xml').then(response => {
        this.xmlContent = response.data;
        const jsonContent = convert.xml2json(this.xmlContent, { compact: true })
        this.dataList = JSON.parse(jsonContent);
        this.processData(); //동기 처리를 위함
        localStorage.setItem('userStarObject', this.userStarObject);
        setTimeout(() => {
          this.$router.push({ path: "/result" });
        }, 2000); //기다리는 느낌을 주기 위해 2초 딜레이
        
      }, () => {
        this.xmlError = true;
      });
      },
      processData() {
        this.userStarObject = findCustomStar(this.dataList, this.userBirthDay, this.userBirthDay);
        console.log(this.userStarObject);
      }
    }
  }

</script>
<style scoped>
.v-progress-circular {
  margin: 1rem;
}
#loadingMessage {
  color: #e9eaf5;
  font-family: 'Gowun Batang', serif !important;
  font-size: 1.4rem !important;
  font-weight: 300;
 }
</style>