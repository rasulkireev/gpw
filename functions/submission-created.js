var axios = require("axios")

exports.handler = async function(event, context) {

    const payload = JSON.parse(event.body).payload
    const data = JSON.parse(event.body).payload.data
    console.log(`Payload: ${JSON.stringify(payload)}`)
    console.log(`Metadata: ${data.metadata}`)
    console.log(`Metadata type: ${typeof data.metadata}`)
    
    console.log("looping with for")
    for (const key in data.metadata) {
        console.log(`${key}: ${data.metadata[key]}`);
    }

    console.log("looping with array")
    const keys = Object.keys(data.metadata);
    console.log(keys);
    keys.forEach((key, index) => {
        console.log(`${key}: ${data.metadata[key]}`);
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
