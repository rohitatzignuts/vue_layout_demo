<script setup lang="ts">
import ArticleCardGrid from "../components/ArticleCardGrid.vue";
import TwoColumnLayout from "../layouts/TwoColumnLayout.vue";

</script>
<template>
  <TwoColumnLayout >
    <template #main>
      <ArticleCardGrid />
    </template>
  </TwoColumnLayout>
</template>
