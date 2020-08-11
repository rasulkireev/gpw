var axios = require("axios")

exports.handler = async function(event, context) {

    const payload = JSON.parse(event.body).payload
    console.log(`Payload: ${JSON.stringify(payload)}`)
    console.log(`Recieved a submission: ${payload.userName}`)

    return await axios({
        method: 'POST',
        url: 'https://api.buttondown.email/v1/subscribers',
        headers: {
            Authorization: `Token ${process.env.BUTTONDOWN_API}`
        },
        data: {
            'email': payload.email,
            ' referrer_url': payload.referrer_url,
            'metadata': {
                'name': payload.name,
            },
            'tags': payload.tags,
        },
    })
    .then(response => console.log(response))
    .catch(error => console.log(error))
}
