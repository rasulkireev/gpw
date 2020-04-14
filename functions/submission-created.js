var axios = require("axios")

exports.handler = async function(event, context) {

    const email = JSON.parse(event.body).payload.email
    console.log(`Recieved a submission: ${email}`)

    return await axios({
        method: 'POST',
        url: `https://emailoctopus.com/api/1.5/lists/${process.env.OCTO_LIST_ID}/contacts`,
        data: {
            "api_key": process.env.EMAILOCTOPUS_API,
            "email_address":  email,
        },
    })
    .then(response => console.log(response))
    .catch(error => console.log(error))
}
