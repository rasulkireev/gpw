var axios = require("axios")

exports.handler = async function(event, context) {

    const email = JSON.parse(event.body).payload.email
    console.log(`Recieved a submission: ${email}`)

    return await axios({
        method: 'POST',
        url: 'https://api.buttondown.email/v1/subscribers',
        headers: {
            Authorization: `Token ${process.env.BUTTONDOWN_API}`
        },
        data: {
            body: JSON.stringify({ email }),
        },
    })
    .then(response => console.log(response))
    .catch(error => console.log(error))
}
