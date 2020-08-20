<template>
  <Layout>
       <DigitalGarden /> 
  </Layout>
</template>

<static-query>
  query {
    metadata {
      siteUrl
    }
  }
</static-query>


<script>
import DigitalGarden from "../components/DigitalGarden"

export default {
    components: {
        DigitalGarden
    },
    metaInfo: {
        title: 'Digital Garden',
        description: "Digital Garden is collection of different types of contents I produce during the day. Articles, Book Notes, Second Brain, Learning in Public, etc.",
        link: [
            { rel: 'canonical', href: `https://rasulkireev.com/digital-garden` },
        ]
    }
}
</script>
