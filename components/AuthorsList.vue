<template>
  <div class="card-list">
    <AuthorCard
        v-if="authorsList?.length"
        :list="authorsList"
    />
  </div>
</template>

<script setup>
import useAuthorsList from "~/hooks/getAuthorsList";

const {
  authorsList,
  getAuthorsList
} = useAuthorsList()

onMounted(() => getAuthorsList())
</script>

<style lang="scss" scoped>
.card-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;

  @include TabletSmall {
    display: grid;
    grid-template-columns: repeat(2, 1fr);;
    margin: 0 auto;
    max-width: max-content;
  }

  @include M {
    grid-template-columns: repeat(3, 1fr);
    margin: 0 auto;
  }
}
</style>