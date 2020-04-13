var axios = require("axios")

exports.handler = async function(event, context) {

    console.log(event)
    console.log(event.body)
    console.log(event.body.payload)
    console.log(event.body.payload.data)
    
    const email = JSON.parse(event.body).payload.userEmail

    await axios({
        method: 'POST',
        url: `https://emailoctopus.com/api/1.5/lists/${process.env.OCTO_LIST_ID}/contacts`,
        data: {
            "api_key": process.env.EMAILOCTOPUS_API,
            "email_address":  email,
        },
    })
    .then(response => response.json())
    .then(data => {
        console.log(`Submitted to EmailOctopus:\n ${data}`)
    })
    .catch(function (error) {
        error => ({ statusCode: 422, body: String(error) })
    });
}
