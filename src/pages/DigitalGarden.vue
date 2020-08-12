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

    name: 'Digital Garden',
    metaInfo: {
        title: 'Digital Garden',
        link: [
            { rel: 'canonical', href: `https://rasulkireev.com/digital-garden` },
        ]
    }
}
</script>
