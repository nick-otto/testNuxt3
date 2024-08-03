<template>
  <nuxt-link
      v-for="author in list"
      :key="author.id"
      :to="`/articles/author/${author.id}`"
      class="card"
  >
    {{ author.name }}
  </nuxt-link>
</template>

<script setup>
const props = defineProps(['list'])
const list = computed(() => props.list)
</script>

<style>
a {
  color: #0e1217;
}
</style>