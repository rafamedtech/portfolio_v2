<script setup>
const blogPosts = await queryContent('/blog').sort({ title: 1 }).find();
</script>

<template>
  <AppHeader />
  <NuxtPage />
  <AppFooter />
</template>
