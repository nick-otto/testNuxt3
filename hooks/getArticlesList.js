export default function useArticlesList() {

    const articlesList = ref();
    const getArticlesList = async (params = {}) => {
        try {
            articlesList.value = await $fetch(`/api/articles-list`, {
                params
            })
            if (!params.author) {
                return articlesList.value
            } else {
                articlesList.value = articlesList.value.filter(article => Number(article.userId) === Number(params.author))
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