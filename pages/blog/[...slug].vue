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
    class="hero-pattern container prose prose-pink max-w-none py-24 px-5 pt-48 prose-headings:text-secondary prose-h3:text-primary prose-p:text-lg prose-p:text-light prose-blockquote:bg-custom prose-blockquote:p-1 prose-strong:text-accent prose-em:text-primary prose-code:text-light md:pt-24"
  >
    <ContentDoc class="post-content container">
      <template #not-found>
        <div class="grid min-h-[75vh] place-items-center">
          <div class="text-center">
            <h1 class="mt-4">Post not found</h1>
            <nuxt-link
              to="/"
              class="clay-effect flex items-center rounded-lg border-0 bg-accent py-2 px-2 text-base text-black no-underline hover:bg-accent/75 focus:outline-none md:mt-0 md:inline-flex md:px-6"
              >Back to Home</nuxt-link
            >
          </div>
        </div>
      </template>
    </ContentDoc>
  </main>
</template>
