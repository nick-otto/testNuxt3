<template>
  <ul>
    <li
        v-for="menu in navbarList"
        :key="menu.name"
    >
      <nuxt-link :to="menu.link">
        {{ menu.name }}
      </nuxt-link>
    </li>

  </ul>
</template>

<script setup>
import {useArticlesViewedStore} from "~/stores/articlesViewed";

const {
  getArticlesViewed
} = useArticlesViewedStore();

const viewedIdList = ref();

const navbarList = [
  {
    name: 'Главная',
    link: '/'
  },
  {
    name: 'Просмотренные',
    link: `/?viewed=${viewedIdList}`
  },
  {
    name: 'Авторы',
    link: '/authors-list'
  }
]

onBeforeMount(() => {
  viewedIdList.value = getArticlesViewed()
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