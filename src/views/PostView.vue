<script setup lang="ts">
import ArticleCard from "@/components/ArticleCard.vue";
import useArticles  from "../composables/useArticles";
import { useRoute } from "vue-router";
import { ref } from "vue";

const route = useRoute()
const articleId = Number(route.params.id)
const articles = useArticles().getArticles();
const article = ref(articles.find((article) => article.id === articleId) || {
  id: 0,
  title: "",
  subTitle: "",
  body: ""
});

</script>
<template>
    <ArticleCard :article="article" />
</template>
