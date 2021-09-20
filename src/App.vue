<template>
  <v-app>
    <v-main>
      <transition name="fade"  mode="out-in">
        <router-view></router-view>
      </transition>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {
    
  },

  data: () => ({
    //
  }),
};
</script>

<style>
#app {
/* Location of the image */
background-image: url('~@/assets/images/star_background.jpg');

/* Background image is centered vertically and horizontally at all times */
background-position: center center;

/* Background image doesn’t tile */
background-repeat: no-repeat;

/* Background image is fixed in the viewport so that it doesn’t move when
the content’s height is greater than the image’s height */
background-attachment: fixed;

/* This is what makes the background image rescale based
on the container’s size */
background-size: cover;

/* Set a background color that will be displayed
while the background image is loading */
background-color: #464646;
}
body {
  text-align: center;
}
.fade-enter {
   opacity: 0; 
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease-out; 
}
.fade-leave-to {
  opacity: 0; 
}
.v-messages__message {
    color: #ffc9c9 !important;
    font-weight: 900 !important;
    font-family: 'Gowun Batang', serif !important;
}
.v-label {
  font-weight: 500 !important;
}
</style>

