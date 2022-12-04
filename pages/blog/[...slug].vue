<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content/dist/runtime/types';
import type { RouteLocationNormalizedLoaded } from 'vue-router';

// Similar posts
const route: RouteLocationNormalizedLoaded = useRoute();
const { similarPosts } = await usePost(route);

definePageMeta({
  // Redirect to 404 if post not found
  // middleware: [
  //   async function ({ params }: RouteLocationNormalized, from: RouteLocationNormalized) {
  //     const posts = await queryContent<ParsedContent>('blog').find();

  //     const currentPost = computed(() =>
  //       posts.find((post: ParsedContent) => post.slug === params.slug[0])
  //     );

  //     if (!currentPost.value) {
  //       return abortNavigation(
  //         createError({
  //           statusCode: 404,
  //           message: 'Post not found',
  //         })
  //       );
  //     }
  //   },
  // ],
  pageTransition: {
    name: 'fade',
    mode: 'out-in',
  },
});
</script>

<template>
  <main class="hero-pattern container prose max-w-none py-24 px-5 pt-40 md:pt-24">
    <div
      class="container prose-pink mt-4 prose-headings:text-secondary prose-h3:text-primary prose-p:text-lg prose-p:text-light prose-blockquote:bg-custom prose-blockquote:p-1 prose-strong:text-accent prose-em:text-primary prose-code:text-light"
    >
      <button
        @click="$router.push('/blog')"
        class="clay-effect flex items-center gap-2 rounded-lg border-0 bg-primary py-2 px-2 text-base text-black hover:bg-primary/75 focus:outline-none md:mt-0 md:inline-flex md:px-6"
      >
        <Icon name="heroicons-solid:arrow-left" /> Back to Blog
      </button>

      <!-- Post content -->
      <ContentDoc class="post-content">
        <template v-slot="{ doc }">
          <img
            :src="doc.img"
            alt=""
            class="mx-auto rounded-2xl"
            :class="{ 'md:h-[500px]': doc.img }"
          />
          <h1>{{ doc.title }}</h1>

          <ContentRendererMarkdown :value="doc" />
        </template>
        <template v-slot:not-found>
          <h1>post not found test</h1>
        </template>
      </ContentDoc>
    </div>

    <!-- Related posts -->
    <section class="container">
      <h2 class="mb-0 text-center text-3xl font-medium text-secondary sm:text-4xl">
        Related posts
      </h2>

      <PostCard v-for="post in similarPosts" :post="post" :key="post._path" />
    </section>
  </main>
</template>
