<template>
  <div>resultPage</div>
</template>
<script>
  export default {
    created() {
      if(localStorage.getItem('name') === null || localStorage.getItem('birthDay') === null || localStorage.getItem('userStarObject') === null) {
        this.$router.push({ path: "/" });
      }
    }
  }
</script>