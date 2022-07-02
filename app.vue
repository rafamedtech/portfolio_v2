<script setup>
const { path } = useRoute();
const { data } = await useAsyncData(`blog/${path}`, () => {
  return queryContent().where({ _path: path }).findOne();
});
</script>

<template>
  <AppHeader />
  <NuxtPage />
  <AppFooter />
</template>
