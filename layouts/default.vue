
<template>

<div class="max-w-5xl bg-white mx-auto antialiased font-nunito p-12 bg-gray-50 dark:bg-gray-700">
   <Html lang="en" />
  <Meta property="og:image" content="/cover.jpg" />
  <Header />

<main class="my-16">
  <slot />
</main>

<footer class="dark:text-white">
  <div class="flex justify-between">
    <p>Built with Vue, Nuxt and Nuxt Content</p>

    <div class="flex gap-5">
      <NuxtLink to="https://github.com/chetannn" class="underline font-bold dark:text-green-400">Github</NuxtLink>
      <NuxtLink to="https://twitter.com/chetannnk" class="underline font-bold dark:text-green-400">Twitter</NuxtLink>
    </div>
  </div>
</footer>
</div>

</template>

<style>
body {
  @apply bg-gray-50 dark:bg-gray-700;
}

.bar::after {
    @apply h-2 absolute max-w-md left-[0%] bg-green-400 w-full content-[''] top-[90%] rounded mt-3;
}
</style>
