<template>
    <div>
       <svg width="500" height="500">
            <circle cx="60" cy="60" r="50" fill="red" />
       </svg>
    </div>
</template>

<static-query>
query {
    allPost {
        totalCount
        edges {
            node {
                dateCreated (format: "MMMM D, Y")
                wordCount
            }
        }
    }
}
</static-query>

<script>
import * as d3 from 'd3'

export default {
    props: {
        data: {
            type: Array
        },
    },
    data() {
        return {
            dataset: Array,
        }
    },
    computed: {
        load() {
            const origData = this.$static.allPost.edges

            let dataset = []
            origData.forEach(function (item) {
                dataset.push({
                    "date": item.node.dateCreated,
                    "wordCount": item.node.wordCount,
                });
            });

            this.dataset = dataset
        },
    }
    //     transform() {
    //         dateParser = d3.utcParse("%B %d, %Y")
    //         formatMonth = d3.timeFormat("%B %Y")
    //         console.log(dateParser)
    //         console.log(formatMonth)

    //         // Grouping data by month
    //         wordsByMonth = Array.from(
    //             d3.rollup(
    //                 dataset,
    //                 v => d3.sum(v, d => d.word_count),
    //                 d => formatMonth(dateParser(d.date))
    //             )
    //         )
    //         console.log(wordsByMonth)

    //         return wordsByMonth
    //     },
    // },
}
</script>

<style>

</style>