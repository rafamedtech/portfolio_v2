<script setup>
const projects = await queryContent('/projects').find();

useHead({
  title: 'My Work - Rafamed',
  meta: [
    {
      name: 'description',
      content: 'Projects',
    },
  ],
});
</script>

<template>
  <section class="hero-pattern">
    <div class="container mx-auto px-5 pt-48 pb-24">
      <h2 class="text-center text-3xl font-medium text-secondary sm:text-4xl">
        Here is some of the work I've done
      </h2>

      <div class="mt-4 flex flex-wrap pt-6">
        <ProjectCard v-for="(project, index) in projects" :key="index" :project="project" />
      </div>
    </div>
  </section>
</template>
