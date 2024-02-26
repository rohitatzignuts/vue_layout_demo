<script setup lang="ts">
import ArticleCard from "../components/ArticleCard.vue";
import useArticles  from "../composables/useArticles.ts";
const articles = useArticles().getArticles()

</script>
<template>
    <v-container class="bg-surface-variant">
    <v-row no-gutters>
    <v-col
            v-for="article in articles"
            :key="article.id"
            cols="12"
            sm="4"
    >
        <v-sheet class="ma-2 pa-2 rounded-xl rounded-be-0">
        <ArticleCard :article="article"/>
        </v-sheet>
    </v-col>
    </v-row>
</v-container>
</template>