<script setup lang="ts">
import { useRoute } from 'vue-router';
import TwoColumnLayout from './layouts/TwoColumnLayout.vue';
import BlankLayout from './layouts/BlankLayout.vue';
const route = useRoute()

</script>
<template>
  <section>
    <TwoColumnLayout v-if="route.meta.layout === 'default'" />
    <BlankLayout v-if="route.meta.layout === 'blank'" />
    <RouterView />
  </section>

</template>

