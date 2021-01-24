<template>
  <div class="wrapper">
		<!-- <h1>Hello</h1>
		<p>Let's make it through to the end.</p>
		<p>Hurry moderately.</p>
		<p>We can do anything.</p> -->
		<p>{{articleData}}</p>
		<div class="iterContainer" @mouseleave="displayTypeSelect(-1)">
			<div class="typeSelectContainer" v-show="displayedTypeSelect === 0" >
				<div class="typeSelect">
					<div class="typeSelectBtnContainer">
						<button @click="addElement(0, 'heading')">普通の見出し</button>
					</div>
				</div>
			</div>
			<button class="btn btn-primary" @mouseover="displayTypeSelect(0)">追加</button>
		</div>
		<div class="iterContainer" @mouseleave="displayTypeSelect(-1)" v-for="(d, idx) in articleData" :key="'container'+idx">
			<div class="dataEditorContainer">
				<editor-component :article-data="d" />
			</div>
			<div class="typeSelectContainer" v-show="displayedTypeSelect === idx+1" >
				<div class="typeSelect">
					<div class="typeSelectBtnContainer">
						<button @click="addElement(idx+1, 'heading')">普通の見出し</button>
					</div>
				</div>
			</div>
			<button class="btn btn-primary" @mouseover="displayTypeSelect(idx+1)">追加</button>
		</div>
  </div>
</template>

<script>
import axios from 'axios';
import ArticleComponent from './ArticleComponent.js';
import EditorComponent from './EditorComponent.vue';
import _ from 'lodash'; //ちゃんとは調べてないけどDeep Copyした方が良さそうなので、そのためにlodashを使う

export default {
	components: {
		EditorComponent
	},
	data: function() {
		return {
			articleData: [],
			test: '',
			displayedTypeSelect: -1
		};
	},
	mounted: async function() {
		// id=1のデータを取り出す
		const url = "http://localhost:8000/api/fetch_article_data/1";
		await axios.get(url).then(res => {
			this.test = res.data.msg;
			if(res.data.status === 0) {
				// alert('データが存在しません');
			} else if(res.data.status === 1) {
				this.articleData = JSON.parse(res.data.data);
			}
		});
	},
	methods: {
		displayTypeSelect: function(idx) {
			this.displayedTypeSelect = idx;
		},
		addElement: function(order, type) {
			// orderによって、他の要素のorderを増加させる必要がある。
			this.articleData = this.articleData.map(d => {
				if(d.order >= order) {
					d.order += 1;
					return d;
				}
				else return d;
			});
			// 適切な場所にデータを挿入する
			this.articleData.splice(order, 0, {
				order: order,
				type: type,
				option: 'normal',
				// dataはdeepcopyで初期値を設定
				data: _.cloneDeep(ArticleComponent[type].normal.data)
			})
		}
	}
}
</script>

<style lang=scss scoped>

</style>