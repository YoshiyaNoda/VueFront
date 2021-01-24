<template>
  <div class="container">
    <!-- articleData.typeに応じて見た目を変える -->
    <p>{{ articleData }}</p>
  </div>
</template>

<script>
export default {
  props: {
    articleData: new Object()
  },
  methods: {
    updateData: function() {
      this.$parent.articleData[this.articleData.order] = this.articleData;
    }
  }
}
</script>

<style lang="scss" scoped>

</style>