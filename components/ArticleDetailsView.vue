<template>
  <div>
    <div class="card-list">
      <div
          v-for="card in articlesList"
          :key="card.id"
          class="card"
      >
        <nuxt-link :to="`/articles/author/${card.userId}`">
          Author: {{ authorNameById(card.userId) }}
        </nuxt-link>
        <h1>Name: {{ card.title }}</h1>
        <h3>Description: {{ card.body }}</h3>
      </div>
    </div>
  </div>
</template>

<script setup>
import useArticlesList from "~/hooks/getArticlesList";
import useAuthorsList from "~/hooks/getAuthorsList";

const route = useRoute();
const articleId = route.params.id;

const {
  articlesList,
  getArticlesList
} = useArticlesList()

const {
  authorsList,
  getAuthorsList
} = useAuthorsList()

const authorNameById = (id) => {
  if (authorsList.value) {
    return authorsList.value.filter(author => author.id === Number(id))[0].name
  }
};

onMounted(() => {
  getArticlesList({
    article: articleId
  })
  getAuthorsList()
})
</script>

<style lang="scss" scoped>
p {
  text-align: center;
  margin-top: 10px;
  font-size: 18px;
  font-weight: 600;
}

a {
  &:hover {
    opacity: 0.7;
  }
}

.card-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
}
</style>