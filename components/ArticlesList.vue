<template>
  <div class="card-list">
    <Card
        v-if="articlesList?.length && authorsList?.length"
        :list="articlesList"
        :authorsList="authorsList"
    />
  </div>
</template>

<script setup>
import useArticlesList from "~/hooks/getArticlesList";
import useAuthorsList from "~/hooks/getAuthorsList";

const {
  articlesList,
  getArticlesList
} = useArticlesList()

const {
  authorsList,
  getAuthorsList
} = useAuthorsList()

const route = useRoute();

watch(
    () => route.query,
    () => getArticlesList(
      {
        author: route.query.author,
        viewed: route.query.viewed
      }
    )
);

onMounted(() => {
  getAuthorsList();
  getArticlesList({
    viewed: route?.query?.viewed,
    author: route?.query?.author
  });
})
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