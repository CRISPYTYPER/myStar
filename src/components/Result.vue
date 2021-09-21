<template>
      <div>resultPage</div>
</template>
<script scoped>
  // if(localStorage.getItem('name') === null || localStorage.getItem('birthDay') === null) {
  //   alert('잘못된 접근입니다.');
  //   location.href='/';
  // }
  export default {
    created() {
      if(localStorage.getItem('name') === null || localStorage.getItem('birthDay') === null) {
        this.$router.push({ path: "/" });
      }
    }
  }
</script>