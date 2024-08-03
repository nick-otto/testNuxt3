export default defineEventHandler(async (event) => {
        try {
            return await $fetch(`https://jsonplaceholder.typicode.com/posts`, {})
        } catch (error) {
            console.log('getArticlesList error', error)
        }
})