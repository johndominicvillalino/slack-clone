const register = (email, password, password_confirmation) => {

    let data = {
        email: email,
        password: password,
        password_confirmation: password_confirmation,
    };

    var requestOptions = {
        method: 'POST',
        body: JSON.stringify(data),
        redirect: 'follow', 
        headers: {
            'Content-Type': 'Application/json'
        }
    };

    fetch("http://206.189.91.54//api/v1/auth/", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error))
}

export default register;