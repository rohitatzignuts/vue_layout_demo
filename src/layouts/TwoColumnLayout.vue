<script setup>
import {RouterLink} from 'vue-router'
</script>
<template>
<v-layout class="rounded rounded-md">
    <RouterLink to="/"><v-app-bar title="LOGO"></v-app-bar></RouterLink>

    <v-navigation-drawer class="pt-4">
    <v-list-item title="My Application" subtitle="Vuetify"></v-list-item>
    <v-divider></v-divider>
    <v-list-item link title="About"></v-list-item>
    <v-list-item link title="Contact"></v-list-item>
    <v-list-item link title="Logout "></v-list-item>
    </v-navigation-drawer>

    <v-main class="d-flex align-center flex-column justify-between" style="min-height: 300px;">
        <slot name="main" />
        <v-footer>&#169; Zignuts@2024</v-footer>   
    </v-main>
</v-layout>
</template>