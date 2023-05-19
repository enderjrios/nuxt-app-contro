<template>
  <nav class="flex sm:justify-center space-x-4 mt-4">
    <div class="">
      <nuxt-link
        class="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900"
        to="/"
      >
        <Icon name="carbon:home" />
        Home</nuxt-link
      >

      <nuxt-link
        class="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900"
        to="/contactos"
      >
        <Icon name="carbon:mail-all" />
        Contactos
      </nuxt-link>

      <nuxt-link
        v-if="!user"
        class="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900"
        to="/login"
      >
        <Icon name="carbon:login" />
        Login
      </nuxt-link>
      
      <nuxt-link
        v-if="!user"
        class="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900"
        to="/register"
      >
        <Icon name="carbon:login" />
        Register
      </nuxt-link>

      <nuxt-link
        v-else
        class="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900"
        to="/servicios"
      >
        <Icon name="carbon:ai-status-complete" /> Servicios</nuxt-link
      >

      <nuxt-link
        class="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900"
        to="/productos"
        >Productos</nuxt-link
      >

      <nuxt-link
        class="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900"
        to="/about"
        >About</nuxt-link
      >
      <slot />
    </div>
  </nav>
</template>

<script setup lang="ts">
const user = useSupabaseUser();

</script>
