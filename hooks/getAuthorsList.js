export default function useAuthorsList() {

    const authorsList = ref();
    const getAuthorsList = async (params = {}) => {
        try {
            authorsList.value = await $fetch(`/api/authors-list`, {
                params
            })
            return authorsList.value
        } catch (error) {
            console.log('getAuthorsList error', error)
        }
    }

    return {
        authorsList,
        getAuthorsList
    }
}