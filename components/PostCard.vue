<script setup>
defineProps({
  post: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="p-4">
    <div class="flex h-full flex-col items-center md:flex-row md:gap-8">
      <figure class="h-full w-full lg:w-2/5">
        <img
          class="h-60 w-full rounded-[2.5rem] object-cover object-center p-6"
          :src="post.img"
          alt="blog"
        />
      </figure>
      <div class="p-6 lg:w-3/5">
        <h1 class="mb-3 text-2xl font-medium text-primary">{{ post.title }}</h1>
        <p class="mb-3 text-base leading-relaxed text-white xl:text-lg">{{ post.description }}</p>

        <nuxt-link
          :to="{
            path: post._path,
          }"
          class="clay-effect inline-flex w-fit items-center rounded-xl border-0 bg-accent py-2 px-6 text-lg text-black hover:bg-accent/75 focus:outline-none"
          >Read more
        </nuxt-link>
      </div>
    </div>
  </div>
</template>
