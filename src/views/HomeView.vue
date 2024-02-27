<script setup lang="ts">
import ArticleCardGrid from "../components/ArticleCardGrid.vue";

</script>
<template>
  <component :is="$route.meta.layout  || 'section' " >
    <template #main>
      <ArticleCardGrid />
    </template>
  </component>
</template>
