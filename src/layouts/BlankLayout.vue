<script setup lang="ts">
import { RouterLink } from 'vue-router';

</script>
<template>
    <v-container>
    <v-row justify="center" class="my-15">
    <v-col cols="12" class="text-center">
        <h1>404 - Page Not Found</h1>
        <p>The page you are looking for does not exist.</p>
        <RouterLink to="/" class="btn"><v-btn
        block
        class="text-none"
        color="grey-lighten-3"
        variant="flat"
        >Go Back Home</v-btn>
    </RouterLink>
    </v-col>
    </v-row>
</v-container>
</template>