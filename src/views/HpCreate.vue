<template>
  <div class="wrapper">
		<h1>Hello</h1>
		<p>Let's make it through to the end.</p>
		<p>Hurry moderately.</p>
		<p>We can do anything.</p>
		<p>{{test}}</p>
  </div>
</template>

<script>
import axios from 'axios';
export default {
	data: function() {
		return {
			articleData: new Object(),
			test: ''
		};
	},
	mounted: async function() {
		// id=1のデータを取り出す
		const url = "http://localhost:8000/api/fetch_article_data/1";
		await axios.get(url).then(res => {
			this.test = res.data;
		});
	}
}
</script>

<style lang=scss scoped>

</style>