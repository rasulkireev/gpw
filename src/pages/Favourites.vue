<template>
    <Layout>
        <div class="mb-4">
            <h1 class="text-4xl">Favourites</h1>
            <p>This is a list of my favourite things. Currently, the list includes podcast episodes only. I am working to add more things very soon.</p>
            <ul class="inline-block p-2 mt-4 list-outside bg-gray-200 rounded">
                <h3 class="mb-2 text-gray-700 border-b border-gray-400">Table of Contents</h3>
                <li><a class="text-blue-700" href="#podcast-episodes">Podcast Episodes</a></li>
            </ul>
        </div>

        <section id="podcast-episodes">
            <h2 class="mb-4 text-2xl border-b border-gray-200">Podcasts Episodes</h2>
            <ul v-for="episode in episodes" :key="episode.id" class="list-outside">
                <li class="mb-2">
                    <a class="text-blue-700" :href="episode.url">{{ episode.episode }}</a> - {{ episode.podcast }}
                </li>
            </ul>
        </section>
    </Layout>
</template>

<script>
import { podcastEpisodes } from "../data/favourites.js"

export default {
    data () {
        return {
            episodes: podcastEpisodes,
        }
    }
}
</script>

<style>

</style>