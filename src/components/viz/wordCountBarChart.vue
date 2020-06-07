<template>
    <div>
        Hello
    </div>
</template>

<static-query>
query {
    allPost {
        totalCount
        edges {
            node {
                date (format: "MMMM D, Y")
                timeToRead
                wordCount
            }
        }
    }
}
</static-query>

<script>
import * as d3 from "d3"

export default {
    computed: {
        loadAndTransform() {
            const origData = this.$static.allPost.edges
            let dataset = []
            origData.forEach(function (item) {
                dataset.push({
                    "date": item.node.date,
                    "wordCount": item.node.wordCount,
                    "timeToRead": item.node.timeToRead,
                });
            });
            console.log(dataset)

            // // Parse Python Datetime string to JS date object
            // dateParser = d3.utcParse("%Y-%m-%dT%H:%M:%S%Z")
            // formatMonth = d3.timeFormat("%B %Y")
            
            // // Grouping data by month
            // wordsByMonth = Array.from(
            //     d3.rollup(
            //         dataset, 
            //         v => d3.sum(v, d => d.word_count),  
            //         d => formatMonth(dateParser(d.date))
            //         )
            //     )
            
            // return wordsByMonth;
        }
    },
}
</script>

<style>

</style>