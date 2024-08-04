export default function useArticlesList() {

    const articlesList = ref();
    const getArticlesList = async (params = {}) => {
        try {
            articlesList.value = await $fetch(`/api/articles-list`, {
                params
            })
            if (params.author) {
                articlesList.value = articlesList.value.filter(article => Number(article.userId) === Number(params.author))
            } else if (params.article) {
                articlesList.value = articlesList.value.filter(article => Number(article.id) === Number(params.article))
            } else {
                return articlesList.value
            }
        } catch (error) {
            console.log('getArticlesList error', error)
        }
    }

    return {
        articlesList,
        getArticlesList
    }
}