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

            if (query?.viewed && data) {
                const filteredData = [];
                const viewedList = query?.viewed.split(',').map(string => +string)
                data.forEach(article => {
                    if (viewedList.includes(article.id)) {
                        filteredData.push(article)
                    }
                })
                return filteredData
            }

            return data
            
        } catch (error) {
            console.log('getArticlesList error', error)
        }
})