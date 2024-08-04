<template>
  <div>
    какая то определенная статья with id = {{ route.params.id }}
  </div>
</template>

<script setup lang="ts">
  const route = useRoute();
</script>