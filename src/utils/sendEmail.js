
export const sendEmail = async ({name, email, message}) => {
    await fetch('http://localhost:4040/', {
        method: "POST",
        body: JSON.stringify({
            name,
            email,
            message
        }),
        headers: { "Content-type": "application/json; charset=UTF-8" }
    }).then(res => res.json())
    .then(console.log)
    .catch(console.error)
}
