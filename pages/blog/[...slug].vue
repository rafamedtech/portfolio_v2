<script setup>
const { path } = useRoute();
const { data } = await useAsyncData(`blog/${path}`, () => {
  return queryContent().where({ _path: path }).findOne();
});

// useHead({
//   title: data.title,
//   meta: {
//     description: data.description,
//     image: data.img,
//   },
// });

definePageMeta({
  title: data.title,
  description: data.description,
  image: data.img,
  keepalive: true,
});
</script>

<template>
  <KeepAlive>
    <main
      class="hero-pattern container prose prose-pink max-w-none py-24 px-5 pt-48 prose-headings:text-secondary prose-h3:text-primary prose-p:text-lg prose-p:text-light prose-blockquote:bg-custom prose-blockquote:p-1 prose-strong:text-accent prose-code:text-light md:pt-24"
    >
      <figure>
        <img :src="data.img" alt="" class="clay-effect mx-auto h-1/2 w-full rounded-2xl lg:w-1/2" />
      </figure>
      <ContentDoc class="container" />
    </main>
  </KeepAlive>
</template>
