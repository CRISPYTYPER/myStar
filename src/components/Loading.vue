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
  export default {
    created() {
      if(localStorage.getItem('name') === null || localStorage.getItem('birthDay') === null) {
        this.$router.push({ path: "/" });
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