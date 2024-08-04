<template>
  <div
      v-for="card in list"
      :key="card.id"
      class="card"
  >
    <nuxt-link
        :to="`articles/details/${card.id}`"
        @click="addIdToViewed(card.id)"
        class="card__body"
    >
      <p>Article:</p>
      {{ card.title }}
    </nuxt-link>

    <nuxt-link
        :to="`/?author=${card.userId}`"
        class="card__header"
    >
      <p>Author:</p>
      {{ authorNameById(card.userId) }}
    </nuxt-link>

    <h6
        v-if="isViewed(card.id)"
        class="card__footer"
    >
      Просмотрено
    </h6>

  </div>
</template>

<script setup>
import {useArticlesViewedStore} from "~/stores/articlesViewed";

const props = defineProps(['list', 'authorsList'])
const list = computed(() => props.list)
const authorsList = computed(() => props.authorsList)

const {
  setArticlesViewed
} = useArticlesViewedStore();

const {
  getArticlesViewed
} = useArticlesViewedStore();

const viewedList = ref();

const addIdToViewed = (id) => {
  setArticlesViewed(id)
};

const authorNameById = (id) => {
  return authorsList?.value.filter(author => author.id === id)[0].name
};

const isViewed = (articleId) => {
  viewedList.value = getArticlesViewed();
  return viewedList.value.includes(articleId)
};
</script>

<style scoped>
a {
  color: #0e1217;

  &:hover {
    opacity: 0.7;
  }
}

p {
  font-size: 18px;
  font-weight: 600;
}
</style>