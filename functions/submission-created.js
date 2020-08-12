var axios = require("axios")

exports.handler = async function(event, context) {

    const data = JSON.parse(event.body).payload.data
    console.log(`Payload: ${data}`)

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
                'name': data.userName,
            },
            'tags': data.tags.split(','),
        },
    })
    .then(response => console.log(response))
    .catch(error => console.log(error))
}
