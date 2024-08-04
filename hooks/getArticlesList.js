export default function useArticlesList() {

    const articlesList = ref();
    const getArticlesList = async (params = {}) => {
        try {
            articlesList.value = await $fetch(`/api/articles-list`, {
                params
            })
            return articlesList.value
        } catch (error) {
            console.log('getArticlesList error', error)
        }
    }

    return {
        articlesList,
        getArticlesList
    }
}