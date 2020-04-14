var axios = require("axios")

exports.handler = async function(event, context) {

    const email = JSON.parse(event.body).payload.email
    console.log(`Recieved a submission: ${email}`)

    await axios({
        method: 'POST',
        url: `https://emailoctopus.com/api/1.5/lists/${process.env.OCTO_LIST_ID}/contacts`,
        data: {
            "api_key": process.env.EMAILOCTOPUS_API,
            "email_address":  email,
        },
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(response => console.log(response))
    .catch(error => console.log(error))
}
