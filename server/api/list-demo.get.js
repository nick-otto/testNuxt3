export default defineEventHandler(async (event) => {
    const query = getQuery(event)

    const demoData = [
        {
            id: 1,
            companyName: 'ООО Ромашка',
            name: 'Новогоднее чудо',
            acquiring: 4000000,
            pr: 5000000,
            credits: 700000,
            summary: 9700000,
            currency: 'RUB'
        },
        {
            id: 2,
            companyName: 'ООО Цветочная база',
            name: 'Цветочный магазин',
            acquiring: 4000000,
            pr: 6000000,
            credits: 2000000,
            summary: 12000000,
            currency: 'RUB'
        }
    ]

    // Temp
    if (query?.stores) {
        const filtered = demoData.filter(item => query?.stores?.includes(item.id))

        return {
            items: filtered
        }
    } else {

        return {
            items: demoData
        }
    }
})