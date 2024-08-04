<template>
  <div class="author-details">
    <p>{{ authorNameById() }}</p>

    <div class="card-list">
      <nuxt-link
          v-for="card in articlesList"
          :to="`/articles/details/${card.id}`"
          :key="card.id"
          class="card"
      >
        <h3>Name: {{ card.title }}</h3>
        <h5>Description: {{ card.body }}</h5>
      </nuxt-link>
    </div>
  </div>
</template>

<script setup>
import useArticlesList from "~/hooks/getArticlesList";
import useAuthorsList from "~/hooks/getAuthorsList";

const route = useRoute();
const authorId = route.params.id;

const {
  articlesList,
  getArticlesList
} = useArticlesList()

const {
  authorsList,
  getAuthorsList
} = useAuthorsList()

const authorNameById = () => {
  if (authorsList.value) {
    return authorsList.value.filter(author => author.id === Number(authorId))[0].name
  }
};

onMounted(() => {
  getArticlesList({
    author: authorId
  })
  getAuthorsList()
})
</script>

<style lang="scss" scoped>
p {
  text-align: center;
  margin-top: 10px;
}
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