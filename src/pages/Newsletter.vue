<template>
    <Layout>
        <fullWidthNewsletter
            title="Tuesday Letter"
            description="In this newsletter I will share the most interesting articles and resources I've encountered during the week. 
            Additionally you might here small updated on my projects.">
        </fullWidthNewsletter>

        <div class="mb-4">
            <h1 class="text-4xl">Past Newsletter Issues</h1>
        </div>

        <section id="letters">
            <ul v-for="letter in newsletter.slice().reverse()" :key="letter.id" class="list-outside">
                <li class="mb-2 text-lg">
                    <a class="text-blue-700 border-b-2 hover:text-blue-500 hover:border-blue-500" :href="letter.url" target="_blank">
                        {{ letter.title }}
                    </a>
                </li>
            </ul>
        </section>
    </Layout>
</template>

<script>
import { newsletterLetters } from "../data/newsletter.js"
import fullWidthNewsletter from "../components/fullWidthNewsletter"

export default {
    metaInfo: {
        title: 'Newsletter',
        description: "Archive of letter I send as part of my Personal Newsletter.",
        link: [
            { rel: "canonical", href:  `https://rasulkireev.com/newsletter` },
        ],
    },

    data () {
        return {
            newsletter: newsletterLetters,
        }
    },
    components: {
        fullWidthNewsletter
    },
}
</script>

<style>

</style>