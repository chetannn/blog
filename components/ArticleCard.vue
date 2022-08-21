<script setup>
 defineProps({
   article: Object
 })
</script>

<template>
  <article class="mb-8 text-gray-700 dark:text-white rounded border-2 border-gray-600 shadow-lg p-6 md:p-4 md:p-2 dark:border-white">
    <NuxtLink :to="article._path">
      <h4 class="text-xl md:text-lg font-bold">
        <NuxtLink :to="article._path">{{article.title}}</NuxtLink> 
        </h4>
        <div class="block my-2 text-sm text-gray-600 dark:text-white">{{article.createdAt}} <span class="inline-flex items-center justify-center font-bold rounded px-1 dark:text-green-400">| 5 min read</span></div>
      <p class="leading-relaxed dark:text-gray-100">{{article.excerpt}}</p>
    </NuxtLink>

    </article>
</template>
