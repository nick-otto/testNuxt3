import {defineStore} from 'pinia'

export const useArticlesViewedStore = defineStore('articlesViewed', () => {
    const idViewedList = [];
    function getArticlesViewed () {
      return  localStorage.getItem('ArticlesViewed')
    }

    function setArticlesViewed(code) {
        idViewedList.push(code)
        localStorage.setItem('ArticlesViewed', String(idViewedList))
    }

    return {
        getArticlesViewed,
        setArticlesViewed
    }
})