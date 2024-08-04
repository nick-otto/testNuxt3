<template>
  <div class="layout">

    <Navbar/>

    <div class="content">
      <slot/>
    </div>

    <BackButton
        v-if="hideBackButton()"
        class="back-button"
        @click="goBackToTheBeginning"
    />
  </div>
</template>

<script setup>
const router = useRouter();
const route = useRoute();

const hideBackButton = () => {
  return route.name !== 'index'
}
const goBackToTheBeginning = () => router.go(-1);

</script>

<style lang="scss">
.layout {
  width: 100%;

  .content {
    max-width: 1280px;
    margin: 0 auto;
  }

  .back-button {
    display: none;

    @include XM {
      display: block;
    }
  }
}

</style>