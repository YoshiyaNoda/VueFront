<template>
  <div class="wrap">
    <h1>Hello Sample</h1>
    <p>{{hoge}}</p>
    <p v-for="image in images" :key="image.id">{{image.path}}</p>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data: function() {
    return {
      hoge: 'hoge',
      images: []
    };
  },
  mounted: async function() {
    this.hoge = "fuga";

    const url = "http://localhost:8000/api/fetch_images";
    await axios.get(url).then(res => {
      this.images = res.data;
    }).catch(e => {
      console.log(e);
      alert('失敗しました。');
    });

  }
}
</script>

<style scoped lang="scss">

</style>