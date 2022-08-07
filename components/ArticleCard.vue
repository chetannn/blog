<script setup>
 defineProps({
   article: Object
 })
</script>

<template>
  <article class="mb-8 text-gray-700 dark:text-white rounded border-2 border-gray-600 shadow-lg p-4 md:p-2 dark:border-white">
    <NuxtLink :to="article._path">
      <h4 class="text-lg font-bold">
        <NuxtLink :to="article._path">{{article.title}}</NuxtLink> 
        </h4>
      <span class="block mb-3 text-sm text-gray-500 dark:text-gray-400">July 20, 2022</span>
      <p class="leading-relaxed dark:text-gray-400">{{article.excerpt}}</p>
    </NuxtLink>

    </article>
</template>