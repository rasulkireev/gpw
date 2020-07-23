<template>
    <div class="my-2 md:my-10">
        <p class="mb-3 md:mb-6 text-xl md:text-3xl font-semibold">{{ wmArray.totalCount }} Responses</p>
        
        <div v-if="wmReduce('like-of').length > 0" class="mb-10">
            <p class="text-xl">{{ wmReduce("like-of").length }} Likes</p>
            <div class="my-2">
                <g-image
                    v-for="mention in wmArray.edges"
                    :key="mention.node.wmId"
                    v-if="mention.node.wmProperty=='like-of'"
                    :src="mention.node.author.photo" 
                    class="w-10 rounded-full inline" 
                />
            </div>
        </div>

        <div v-if="wmReduce('repost-of').length > 0" class="mb-10">
            <p class="text-xl">{{ wmReduce("repost-of").length }} Reposts</p>
            <div class="my-2">
                <g-image
                    v-for="mention in wmArray.edges"
                    :key="mention.node.wmId"
                    v-if="mention.node.wmProperty=='repost-of'"
                    :src="mention.node.author.photo" 
                    class="w-10 rounded-full inline" 
                />
            </div>
        </div>

        <div v-if="wmReduce('bookmark-of').length > 0" class="mb-10">
            <p class="text-xl">{{ wmReduce("bookmark-of").length }} Bookmarks</p>
            <div class="my-2">
                <g-image
                    v-for="mention in wmArray.edges"
                    :key="mention.node.wmId"
                    v-if="mention.node.wmProperty=='bookmark-of'"
                    :src="mention.node.author.photo" 
                    class="w-10 rounded-full inline" 
                />
            </div>
        </div>

        <div v-if="wmReduce('in-reply-to').length > 0" class="mb-10">
            <p class="text-xl">{{ wmReduce("in-reply-to").length }} Replies</p>
            <div 
            class="p-4 bg-gray-200 rounded flex items-center my-2" 
            v-for="mention in wmArray.edges"
            v-if="mention.node.wmProperty=='in-reply-to'"
            >
                <g-image
                    :src="mention.node.author.photo" 
                    class="w-10 rounded-full inline" 
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


    </div>
</template>

<script>
export default {
    props: ['wmArray'],
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