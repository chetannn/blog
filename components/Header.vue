<template>
      <header class="flex flex-col items-center md:justify-between md:flex-row dark:text-white">

    <div class="font-bold text-2xl">
      <Nuxt-Link to="/">Chetan Kharel</Nuxt-Link>
    </div>

  <nav class="flex flex-col items-center mt-6 md:mt-0 md:flex-row md:justify-between md:gap-10 font-bold text-lg">
    <CustomNuxtLink to="/blogs" class="mb-6 block md:mb-0">Thoughts</CustomNuxtLink>
    <CustomNuxtLink to="/uses" class="mb-6 block md:mb-0">Uses</CustomNuxtLink>
    <ThemeSwitcher class="block md:mb-0" />
  </nav>
  </header>
</template>