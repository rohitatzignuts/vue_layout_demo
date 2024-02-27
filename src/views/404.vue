<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <component :is="$route.meta.layout  || 'section' " />
</template>