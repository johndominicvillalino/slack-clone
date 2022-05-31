export const login = () => {

    let data = {
        email: "user333333332@example.com",
        password: "12345678"
    }

    let requestOptions = {
        method: 'POST',
        body: JSON.stringify(data),
        redirect: 'follow',
        headers: {
            'Content-Type': 'Application/json'
        }

    };

    fetch("http://206.189.91.54//api/v1/auth/sign_in", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error))

}

