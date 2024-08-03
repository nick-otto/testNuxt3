<template>
  <div class="layout">

    <Navbar/>

    <div class="content">
      <slot/>
    </div>

  </div>
</template>

<style lang="scss">
.layout {
  width: 100%;

  .content {
    max-width: 1280px;
    margin: 0 auto;
  }
}
</style>