<template>
  <template v-if="!viewedIdList">
    Loading...
  </template>
  <template v-else>
    <ul>
      <li>
        <nuxt-link to="/">
          Главная
        </nuxt-link>
      </li>
      <li>
        <nuxt-link :to="`/?viewed=${viewedIdList}`" @focus="getViewedIds">
          Просмотренные
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/authors-list">
          Авторы
        </nuxt-link>
      </li>
    </ul>
  </template>

</template>

<script setup>
import {useArticlesViewedStore} from "~/stores/articlesViewed";

const {
  getArticlesViewed
} = useArticlesViewedStore();

const viewedIdList = ref();

const getViewedIds = () => {
  viewedIdList.value = getArticlesViewed()
};

onMounted(() => {
  getViewedIds()
})
</script>

<style scoped>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
}

li {
  float: left;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

/* Change the link color to #111 (black) on hover */
li a:hover {
  background-color: #111;
}
</style>