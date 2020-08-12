var axios = require("axios")

exports.handler = async function(event, context) {

    const payload = JSON.parse(event.body).payload
    const data = JSON.parse(event.body).payload.data
    const metadata = JSON.parse(data.metadata)
    console.log(`Payload: ${JSON.stringify(payload)}`)
    console.log(`Metadata: ${metadata}`)
    console.log(`Metadata type: ${typeof metadata}`)
    
    console.log("looping with for")
    for (const key in metadata) {
        console.log(`${key}: ${metadata[key]}`);
    }

    console.log("looping with array")
    const keys = Object.keys(metadata);
    console.log(keys);
    keys.forEach((key, index) => {
        console.log(`${key}: ${metadata[key]}`);
    });


    return await axios({
        method: 'POST',
        url: 'https://api.buttondown.email/v1/subscribers',
        headers: {
            Authorization: `Token ${process.env.BUTTONDOWN_API}`
        },
        data: {
            'email': data.userEmail,
            'referrer_url': data.referrer,
            'metadata': {
                'first_name': data.userName,
            },
            'tags': data.tags.split(','),
        },
    })
    .then(response => console.log(response))
    .catch(error => console.log(error))
}
