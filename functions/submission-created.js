var axios = require("axios")

exports.handler = async function(event, context) {

    const payload = JSON.parse(event.body).payload
    const data = JSON.parse(event.body).payload.data
        
    console.log(`Payload: ${JSON.stringify(payload)}`)
    
    var metadata_object = {
        'first_name': data.userName,
    }

    if (typeof data.metadata !== 'undefined') {
        const metadata = JSON.parse(data.metadata)
        for (const key in metadata) {
            metadata_object[key] = metadata[key]
        }
    }
      
    console.log(`Metadata object: ${JSON.stringify(metadata_object)}`)

    return await axios({
        method: 'POST',
        url: 'https://api.buttondown.email/v1/subscribers',
        headers: {
            Authorization: `Token ${process.env.BUTTONDOWN_API}`
        },
        data: {
            'email': data.userEmail,
            'referrer_url': data.referrer,
            'metadata': metadata_object,
            'tags': data.tags.split(','),
        },
    })
    .then(response => console.log(response))
    .catch(error => console.log(error))
}
