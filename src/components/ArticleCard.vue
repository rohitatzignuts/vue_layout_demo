<script setup lang="ts">

import { RouterLink } from 'vue-router';
interface Article {
    id : number,
    title : string,
    subTitle : string,
    body :string
}
defineProps<{
    article : Article
}>()


</script>

<template>
    <RouterLink :to="`/posts/${article.id}`">
    <v-card
        w-auto  
        hover
        class="mx-auto my-8"
    >
        <v-card-item>
        <v-card-title>
            {{article.title.toLocaleUpperCase()}}
        </v-card-title>
        <v-card-subtitle>
            {{article.subTitle}}
        </v-card-subtitle>
        </v-card-item>

        <v-card-text class="leading-5">
            {{article.body}}
        </v-card-text>
    </v-card>
    </RouterLink>
</template>
