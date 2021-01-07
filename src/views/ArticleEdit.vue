<template>
  <div class="wrapper">
    <h1>You Can Edit Article Here</h1>
    <div>{{articles}}</div>
    <p>{{data2json}}</p>
    <input type="text" v-model="sampleData.html">
    <div v-html="sampleData.html"></div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data: function() {
    return {
      articles: [],
      sampleData: {
        age: 24,
        name: 'YoshiyaNoda',
        html: '<h1 style="color: red;">Hello, World</h1>'
      }
    };
  },
  computed: {
      data2json: function() {
        return JSON.stringify(this.sampleData);
      }
    },
  mounted: function() {
    
  },
  methods: {
    fetch: async function() {
      const url = "http://localhost:8000/fetch_articles";
      await axios.get(url).then(res => {
        this.articles = JSON.parse(res.data);
      }).catch(e => {
        console.log(e);
      });      
    }
  }
}
</script>

<style>

</style>