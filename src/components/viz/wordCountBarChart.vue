<template>
    <div>Hello</div>
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
    created() {
        console.log(this.$static.allPost.edges)
    }
}
</script>

<style>

</style>