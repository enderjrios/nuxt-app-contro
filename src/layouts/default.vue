<template>
  <head>
    <title>Sevices Tech</title>
  </head>
  <Menu>
    <button @click="toggleDark()">
    <i inline-block align-middle i="dark:carbon-moon carbon-sun" />
    <span class="ml-2">{{ isDark ? 'Dark' : 'Light' }}</span>
  </button>
  </Menu>
  <div>
    <slot />
  </div>
</template>

<script setup lang="ts">
  import { useDark, useToggle } from '@vueuse/core'
  const isDark = useDark()
  const toggleDark = useToggle(isDark)
</script>
<style>
.dark{
  background: #252525;
  color: antiquewhite;
}
</style>