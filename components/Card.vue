<template>
  <nuxt-link
      v-for="card in list"
      :key="card.id"
      :to="`articles/details/${card.id}`"
      class="card"
      @click="addIdToViewed(card.id)"
  >
    <div>
       <p>Article:</p>
      {{ card.title }}
    </div>
  </nuxt-link>
</template>

<script setup>
import {useArticlesViewedStore} from "~/stores/articlesViewed";

const props = defineProps(['list'])
const list = computed(() => props.list)

const {
  setArticlesViewed
} = useArticlesViewedStore();

const addIdToViewed = (id) => {
  setArticlesViewed(id)
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