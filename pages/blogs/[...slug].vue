<template>
<div class="w-full prose dark:prose-invert max-w-none">
<ContentDoc :path="$route.params.slug ? `/blogs/${$route.params.slug[0]}` : '/blogs' " >
  <template #not-found>
      <h2>Blog: {{ $route.params.slug[0] }} not found</h2>
    </template>
</ContentDoc>
</div>
</template>