<template>
  <div class="wrapper">
      <h1>Hello</h1>
      <p>Let's make it through to the end.</p>
      <p>Hurry moderately.</p>
      <p>We can do anything.</p>
      <p>{{msg}}</p>
  </div>
</template>

<script>
import axios from 'axios';
export default {
    data: function() {
        return {
            msg: 'msg'
        };
    },
    mounted: function() {
        const url = "https://www.yoshiyasakugawa.com/api/fetch";
        axios.get(url).then(res => {
           this.msg = res.data;
        });
    }
}
</script>

<style lang=scss scoped>

</style>