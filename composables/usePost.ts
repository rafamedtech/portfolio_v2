import type { ParsedContent } from '@nuxt/content/dist/runtime/types';
import type { RouteLocationNormalized, RouteLocationNormalizedLoaded } from 'vue-router';

export const usePost = async ({
  params,
}: RouteLocationNormalized | RouteLocationNormalizedLoaded) => {
  const { data: posts } = await useAsyncData(params.slug[0], () =>
    queryContent<ParsedContent>('blog').find()
  );

  const currentPost = computed(() =>
    posts.value?.find((post: ParsedContent) => post.slug === params.slug[0])
  );

  const similarPosts = computed(() =>
    posts.value?.filter(
      (post: ParsedContent) =>
        post.category === currentPost.value?.category && post.slug !== currentPost.value?.slug
    )
  );

  return { posts, currentPost, similarPosts };
};
