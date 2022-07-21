<script setup>
const blogPosts = await queryContent('/blog').sort({ title: 1 }).find();

useHead({
  title: 'Blog - Rafamed',
  meta: [
    {
      name: 'description',
      content: 'Blog posts',
    },
  ],
});

definePageMeta({
  pageTransition: {
    name: 'fade',
    mode: 'out-in',
  },
});
</script>

<template>
  <section class="hero-pattern">
    <div class="container mx-auto px-5 pt-40 pb-24">
      <h2 class="text-center text-3xl font-medium text-secondary sm:text-4xl">
        Here is my blog about web development
      </h2>

      <div class="m-4 flex flex-wrap py-6">
        <PostCard v-for="(post, index) in blogPosts" :key="index" :post="post" />
      </div>
    </div>
  </section>
</template>
