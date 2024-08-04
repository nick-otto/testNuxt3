export default defineEventHandler(async (event) => {
        const query = getQuery(event)

        try {
            let data = await $fetch(`https://jsonplaceholder.typicode.com/posts`, {})
            if (query?.author && data) {
                return data = data.filter(article => Number(article.userId) === Number(query.author))
            }

            if (query?.article && data) {
                return data = data.filter(article => Number(article.id) === Number(query.article))
            }

            return data
            
        } catch (error) {
            console.log('getArticlesList error', error)
        }
})