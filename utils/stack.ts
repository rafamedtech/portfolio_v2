interface Stack {
  name: string;
  icon: string;
}

export const stack = ref<Stack[]>([
  {
    name: 'Git',
    icon: 'teenyicons:git-solid',
  },
  {
    name: 'TailwindCSS',
    icon: 'mdi:tailwind',
  },

  {
    name: 'Typescript',
    icon: 'mdi:language-typescript',
  },
  {
    name: 'Vuejs',
    icon: 'mdi:vuejs',
  },
  {
    name: 'Nuxtjs',
    icon: 'mdi:nuxt',
  },
  {
    name: 'Vitest',
    icon: 'simple-icons:vitest',
  },
  {
    name: 'Supabase',
    icon: 'simple-icons:supabase',
  },
  {
    name: 'Prisma',
    icon: 'vscode-icons:file-type-prisma',
  },
  {
    name: 'Netlify',
    icon: 'simple-icons:netlify',
  },
]);
