<script setup>
definePageMeta({
  pageTransition: {
    name: 'fade',
    mode: 'out-in',
  },
});
</script>

<template>
  <main
    class="hero-pattern container prose prose-pink max-w-none py-24 px-5 pt-48 prose-headings:text-secondary prose-h3:text-primary prose-p:text-lg prose-p:text-light prose-blockquote:bg-custom prose-blockquote:p-1 prose-strong:text-accent prose-code:text-light md:pt-24"
  >
    <ContentDoc class="post-content container" />
  </main>
</template>
