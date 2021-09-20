<template>
  <v-container fill-height>
    <v-row class="text-center" align="center" justify="center">
      <v-col cols="12" class="mb-4 mt-5">
        <h1 class="display-3 mb-3" id="title">
          나만의 별 찾기
        </h1>
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
            >
              시작하기
            </v-btn>
        </div>
      </v-col>
    </v-row>
    
  </v-container>
</template>
<style scoped>
 #title {
  color: #C5CAE9;
  font-family: 'Nanum Pen Script', cursive !important;
  font-weight: 500;
  font-size: 5rem !important;
 }
#startBtn {
  font-family: 'Jua', sans-serif !important;
  font-size: 1.5rem;
}
</style>