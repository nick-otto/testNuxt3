export default defineEventHandler(async (event) => {
        try {
            return await $fetch(`https://jsonplaceholder.typicode.com/users`, {})
        } catch (error) {
            console.log('getAuthorsList error', error)
        }
})