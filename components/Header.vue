<script setup>
  import {  SunIcon } from '@heroicons/vue/outline'
  import { MoonIcon } from '@heroicons/vue/outline'

  const colorMode = useColorMode()
  const onClick = () => (colorMode.value === 'light' ? (colorMode.preference = 'dark') : (colorMode.preference = 'light'))

</script>

<template>
      <header class="flex flex-col items-center md:justify-between md:flex-row dark:text-white">

    <div class="font-bold text-2xl">
      <Nuxt-Link to="/">Chetan Kharel</Nuxt-Link>
    </div>

  <nav class="flex flex-col items-center mt-6 md:mt-0 md:flex-row md:justify-between md:gap-10 font-bold text-lg">
    <CustomNuxtLink to="/blogs" class="mb-6 block md:mb-0">Thoughts</CustomNuxtLink>
    <CustomNuxtLink to="/uses" class="mb-6 block md:mb-0">Uses</CustomNuxtLink>

    <button @click="onClick" class="block md:mb-0" aria-label="Color Mode">
      <ColorScheme placeholder="..." tag="span">
    <MoonIcon v-if="colorMode.value === 'dark'" class="h-5 w-5 text-gray-500 dark:text-white" />
    <SunIcon v-else class="h-5 w-5 text-gray-500 dark:text-white" />
    </ColorScheme>

    </button>

    

  </nav>
  </header>
</template>