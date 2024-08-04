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

  </div>
</template>

<script setup>
import {useArticlesViewedStore} from "~/stores/articlesViewed";

const props = defineProps(['list', 'authorsList'])
const list = computed(() => props.list)
const authorsList = computed(() => props.authorsList)
const route = useRoute();

const {
  setArticlesViewed
} = useArticlesViewedStore();

const addIdToViewed = (id) => {
  setArticlesViewed(id)
};

const authorNameById = (id) => {
  return authorsList?.value.filter(author => author.id === id)[0].name
};
</script>

<style>
a {
  color: #0e1217;
}

p {
  font-size: 18px;
  font-weight: 600;
}
</style>