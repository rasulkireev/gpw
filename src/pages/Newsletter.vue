<template>
    <Layout>
        <fullWidthNewsletter />

        <div class="mb-4">
            <h1 class="text-4xl">Past Newsletter Issues</h1>
        </div>

        <section id="letters">
            <ul v-for="letter in newsletter" :key="letter.id" class="list-outside">
                <li class="mb-2 text-lg">
                    <a class="text-blue-700" :href="letter.url" target="_blank">{{ letter.title }}</a>
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