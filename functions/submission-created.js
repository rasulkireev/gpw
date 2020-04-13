import axios from "axios";

exports.handler = async function(event) {
    console.log(event.body)
    const email = JSON.parse(event.body).payload.userEmail
    console.log(`Recieved a submission: ${email}`)

    axios({
        method: 'POST',
        url: `https://cors-anywhere.herokuapp.com/https://emailoctopus.com/api/1.5/lists/${process.env.GRIDSOME_OCTO_LIST_ID}/contacts`,
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
