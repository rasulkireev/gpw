<template>
    <div class="my-2 font-mono md:my-10">
        <div class="pb-4 mb-6 border-b-2 border-gray-400">
            <p class="text-xl font-bold md:mb-2">
                {{ wmArray.totalCount }} <a href="https://www.w3.org/TR/webmention/">Webmentions</a>
            </p>
            <p>
                Want to respond? Reply, like, reply or bookmark on <!-- Sharingbutton Twitter -->
                <a 
                class="text-blue-600 border-b-2 border-blue-600 hover:border-blue-500 hover:text-blue-500" 
                :href='"https://twitter.com/intent/tweet/?text=" + title + "&amp;url="+url' target="_blank" rel="noopener" aria-label="Twitter">
                Twitter
                </a>
                :)
            </p>
        </div>
        
        <div v-if="wmReduce('like-of').length > 0" class="mb-6">
            <p class="font-semibold">{{ wmReduce("like-of").length }} Likes</p>
            <div class="flex items-center my-2">
                <a 
                :href="mention.node.author.url"
                v-for="mention in wmArray.edges"
                :key="mention.node.wmId"
                v-if="mention.node.wmProperty=='like-of'"
                class="mr-1"
                >
                    <g-image
                        :src="mention.node.author.photo" 
                        class="inline w-10 rounded-full" 
                    />
                </a>
            </div>
        </div>

        <div v-if="wmReduce('repost-of').length > 0" class="mb-6">
            <p class="font-semibold">{{ wmReduce("repost-of").length }} Retweets</p>
            <div class="flex items-center my-2">
                <a
                :href="mention.node.url"
                v-for="mention in wmArray.edges"
                :key="mention.node.wmId"
                v-if="mention.node.wmProperty=='repost-of'"
                class="mr-1"
                >
                    <g-image
                        :src="mention.node.author.photo" 
                        class="inline w-10 rounded-full" 
                    />
                </a>
            </div>
        </div>

        <div v-if="wmReduce('bookmark-of').length > 0" class="mb-6">
            <p class="font-semibold">{{ wmReduce("bookmark-of").length }} Bookmarks</p>
            <div class="my-2">
                <g-image
                    v-for="mention in wmArray.edges"
                    :key="mention.node.wmId"
                    v-if="mention.node.wmProperty=='bookmark-of'"
                    :src="mention.node.author.photo" 
                    class="inline w-10 rounded-full" 
                />
            </div>
        </div>

        <div v-if="wmReduce('in-reply-to').length > 0" class="mb-6">
            <p class="font-semibold">{{ wmReduce("in-reply-to").length }} Replies</p>
            <div 
            class="flex items-center p-4 my-2 bg-gray-200 rounded" 
            v-for="mention in wmArray.edges"
            v-if="mention.node.wmProperty=='in-reply-to'"
            >
                <g-image
                    :src="mention.node.author.photo" 
                    class="inline w-10 rounded-full" 
                />
                <div class="px-4">
                    <a 
                    :href="mention.node.author.url" 
                    class="font-semibold">
                        {{ mention.node.author.name }}
                    </a>
                    <p>{{ mention.node.content.text }}</p>
                </div>
            </div>
        </div>

        <div v-if="wmReduce('mention-of').length > 0" class="mb-6">
            <p class="font-semibold">{{ wmReduce("mention-of").length }} Mentions</p>
            <div 
            class="flex items-center p-4 my-2 bg-gray-200 rounded" 
            v-for="mention in wmArray.edges"
            v-if="mention.node.wmProperty=='mention-of'"
            >
                <div class="px-4">
                    <a 
                    :href="mention.node.url" 
                    class="text-blue-700 hover:text-blue-500"
                    target="_blank">
                        {{ mention.node.url }}
                    </a>
                </div>
            </div>
        </div>



    </div>
</template>

<script>
export default {
    props: ['wmArray','title','url'],
    methods: {
        wmReduce: function (wmPropertyName) {
            let reducedArray = this.wmArray.edges.filter(
                wmItem => wmItem.node.wmProperty == wmPropertyName
            );

            return reducedArray
        }
    }
}
</script>

<style>

</style>