<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content/dist/runtime/types';

// Similar posts
const { params } = useRoute();
const { data, error } = await useAsyncData(params.slug[0], () =>
  queryContent<ParsedContent>('blog').find()
);
const currentPost = data.value?.find((post: ParsedContent) => post.slug === params.slug[0]);
const similarPosts = data.value?.filter(
  (post: ParsedContent) =>
    post.category === currentPost?.category && post.slug !== currentPost?.slug
);

// console.log(similarPosts);

// const currentPost = await queryContent<ParsedContent>('blog')
//   .where({ slug: params.slug[0] })
//   .findOne();
// const similarPosts = await queryContent<ParsedContent>('blog')
//   .where({ category: currentPost.category, slug: { $ne: currentPost.slug } })
//   .find();

if (error.value) {
  abortNavigation(
    createError({
      statusCode: 404,
      message: 'Page not found',
    })
  );
}

definePageMeta({
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

      <ContentDoc v-slot="{ doc }" class="post-content">
        <img
          :src="doc.img"
          alt=""
          class="mx-auto rounded-2xl"
          :class="{ 'md:h-[500px]': doc.img }"
        />
        <h1>{{ doc.title }}</h1>
        <!-- <h4>Table of contents</h4>
        <ul class="w-fit rounded-2xl bg-[#282a36] p-4">
          <li v-for="link in doc.body.toc.links" class="list-none">
            <a :href="`#${link.id}`">{{ link.text }}</a>
          </li>
        </ul> -->
        <!-- <p>{{ doc.body.toc.links[0] }}</p> -->

        <ContentRendererMarkdown :value="doc">
          <template #empty>
            <!-- <a href="https://www.freepik.com/free-vector/404-error-with-person-looking-concept-illustration_20824303.htm#query=not%20found&position=3&from_view=search&track=sph">Image by storyset</a> on Freepik -->
            <img src="@/assets/image/notfound.png" alt="" class="mx-auto h-[500px]" />
            <h1 class="font-base text-center">Post not found</h1>
          </template>
        </ContentRendererMarkdown>
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
