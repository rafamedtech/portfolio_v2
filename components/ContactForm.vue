<script setup></script>

<template>
  <div>
    <form class="clay-effect flex flex-col gap-8 rounded-2xl bg-primary p-10 text-black">
      <div class="flex flex-col">
        <label for="name" class="text-black">Name</label>
        <input
          class="rounded-lg focus:ring focus:ring-secondary"
          type="text"
          name="name"
          id="name"
        />
      </div>
      <div class="flex flex-col">
        <label for="email" class="text-black">Email</label>
        <input
          class="rounded-lg focus:ring focus:ring-secondary"
          type="email"
          name="email"
          id="email"
        />
      </div>
      <div class="flex flex-col">
        <label for="message" class="text-black">Message</label>
        <textarea
          class="rounded-lg focus:ring focus:ring-secondary"
          name="message"
          id="message"
        ></textarea>
      </div>
      <div>
        <button
          class="clay-effect mt-4 items-center rounded-lg border-0 bg-accent py-2 px-6 text-base text-black hover:bg-accent/75 focus:outline-none md:mt-0 md:inline-flex lg:text-lg"
          type="submit"
        >
          Send
        </button>
      </div>
    </form>
  </div>
</template>
