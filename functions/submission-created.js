exports.handler = async function(event) {
    const email = JSON.parse(event.body).payload.userEmail
    console.log(`Recieved a submission: ${email}`)

    fetch(
        `https://cors-anywhere.herokuapp.com/https://emailoctopus.com/api/1.5/lists/${process.env.OCTO_LIST_ID}/contacts`,
        {
            method: 'POST',
            body: {
                "api_key": process.env.EMAILOCTOPUS_API,
                "email_address":  email,
            },
        },)
        .then(response => response.json())
        .then(data => {
            console.log(`Submitted to EmailOctopus:\n ${data}`)
        })
        .catch(error => ({ statusCode: 422, body: String(error) }))

}
