<script setup>
  import {  SunIcon } from '@heroicons/vue/outline/index.js'
  import { MoonIcon } from '@heroicons/vue/outline/index.js'

  const colorMode = useColorMode()
  const onClick = () => (colorMode.value === 'light' ? (colorMode.preference = 'dark') : (colorMode.preference = 'light'))
</script>

<template>
 <button @click="onClick" aria-label="Color Mode">
      <ColorScheme placeholder="..." tag="span">
    <MoonIcon v-if="colorMode.value === 'dark'" class="h-5 w-5 text-gray-500 dark:text-white" />
    <SunIcon v-else class="h-5 w-5 text-gray-500 dark:text-white" />
    </ColorScheme>
    </button>
</template>