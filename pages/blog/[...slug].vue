<script setup>
const { path } = useRoute();

const currentPost = await queryContent('blog').where({ _path: path }).find();

const similarPosts = await queryContent('blog')
  .where({ category: currentPost[0].category, _path: { $ne: currentPost[0]._path } })
  .find();
// console.log(similarPosts);
// const currentCategory = data.value

definePageMeta({
  pageTransition: {
    name: 'fade',
    mode: 'out-in',
  },
});
</script>

<template>
  <main class="hero-pattern container prose max-w-none py-24 px-5 pt-48 md:pt-24">
    <!-- <main
    class="hero-pattern container prose prose-pink max-w-none py-24 px-5 pt-48 prose-headings:text-secondary prose-h3:text-primary prose-p:text-lg prose-p:text-light prose-blockquote:bg-custom prose-blockquote:p-1 prose-strong:text-accent prose-em:text-primary prose-code:text-light md:pt-24"
  > -->
    <div
      class="container prose-pink mt-4 prose-headings:text-secondary prose-h3:text-primary prose-p:text-lg prose-p:text-light prose-blockquote:bg-custom prose-blockquote:p-1 prose-strong:text-accent prose-em:text-primary prose-code:text-light"
    >
      <button
        @click="$router.push('/blog')"
        class="clay-effect flex items-center gap-2 rounded-lg border-0 bg-primary py-2 px-2 text-base text-black hover:bg-primary/75 focus:outline-none md:mt-0 md:inline-flex md:px-6"
      >
        <Icon name="heroicons-solid:arrow-left" /> Back to Blog
      </button>

      <ContentDoc v-slot="{ doc }" class="post-content">
        <img :src="doc.img" alt="" class="mx-auto rounded-2xl md:h-[500px]" />
        <h1>{{ doc.title }}</h1>

        <ContentRenderer :value="doc" />
      </ContentDoc>

      <!-- <template #not-found>
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
        </template> -->
    </div>
    <section class="container">
      <h2 class="text-center text-3xl font-medium text-secondary sm:text-4xl">
        More related posts
      </h2>
      <PostCard v-for="post in similarPosts" :post="post" :key="post._path" />
    </section>
  </main>
</template>
