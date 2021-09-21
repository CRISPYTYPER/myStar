<template>
  <v-app>
    <v-main>
      <v-container fill-height>
        <v-row class="text-center" align="start" justify="center">
          <v-col cols="12" class="mb-2">
            <p class="subheading font-weight-regular" id="description">
              {{ userName }}님의 별은..
            </p>
          </v-col>
        </v-row>
        <v-row class="text-center mt-3 mb-0" align="end" justify="center" id="starInfo">
          <v-col cols="12" class="mt-5 mb-0">
            <br>
            {{ starNameEn }} ( {{ starNameKr}} )<br>
            별자리 : {{ starConstellation }}<br>
            겉보기 등급 : {{ starMagnitude }}
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
        userName:'',
        starNameEn:'',
        starNameKr:'',
        starConstellation:'',
        starMagnitude:''
      }
    },
    created() {
      if(localStorage.getItem('name') === null || localStorage.getItem('birthDay') === null || localStorage.getItem('userStarObject') === null) {
        this.$router.push({ path: "/" });
      }
      const starObjectStr = localStorage.getItem('userStarObject');
      const starObject = JSON.parse(starObjectStr);
      this.starNameEn = starObject.starNameEn;
      this.starNameKr = starObject.starNameKr;
      this.starConstellation = starObject.starConstellation;
      this.starMagnitude = starObject.starMagnitude;
      this.userName = localStorage.getItem('name');
    },
    methods: {
      
    }
  }
</script>
<style scoped>
  #description{
  color: #e9eaf5;
  font-family: 'Gowun Batang', serif !important;
  font-size: 1.6rem !important;
  font-weight: 300;
 }
 #starInfo{
  color: #ffedfb;
  font-family: 'Gowun Batang', serif !important;
  font-size: 1.6rem !important;
  font-weight: 300;
 }
</style>