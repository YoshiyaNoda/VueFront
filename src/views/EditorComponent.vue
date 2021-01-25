<template>
  <div class="container">
    <!-- articleData.typeに応じて見た目を変える -->
    <!-- <p>the Editor has:{{ articleData }}</p>
    <p>the Editor has:{{ d }}</p> -->
    <div v-if="articleData.type === 'heading'">
      <HeadingEditor :article-data="d" />
    </div>
    <div v-if="articleData.type === 'paragraph'">
      <ParagraphEditor />
    </div>
  </div>
</template> 

<script>
import HeadingEditor from './editors/HeadingEditor.vue';
import ParagraphEditor from './editors/ParagraphEditor.vue';
import ArticleComponent from './ArticleComponent.js';
import _ from 'lodash';

export default {
  components: {
    HeadingEditor,
    ParagraphEditor
  },
  data: function() {
    return {
      d: this.articleData
    };
  },
  props: {
    articleData: _.cloneDeep(ArticleComponent.heading.normal)
  },
  watch: {
    // こうやってpropsは監視して、dataを子コンポーネントに渡さないと、おかしなことが起こる
    articleData: function(data) {
      this.d = data;
    }
  },
  methods: {
    // updateData: function() {
    //   this.$parent.articleData[this.articleData.order] = this.articleData;
    // }
  }
}
</script>

<style lang="scss" scoped>

</style>