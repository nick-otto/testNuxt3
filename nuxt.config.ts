export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: {enabled: false},

    app: {
        head: {
            charset: 'utf-8',
            title: 'Nick F Тест задание',
            meta: [
                {
                    name: 'description',
                    content: 'Тестирование'
                },
            ],
            htmlAttrs: {
                lang: 'ru-RU'
            }
        }
    },

    modules: [
        '@pinia/nuxt',
    ],

    css: [
        '~/assets/styles.scss',
    ],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: `
                        @import "~/assets/scss/modules/_media.scss";
                    `,
                },
            },
        },
    },
})
