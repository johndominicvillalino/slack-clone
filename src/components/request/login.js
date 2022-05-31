// desc = login
// Parameter : pass object data with properties - { email, password }

const login = async(userInfo) => {
    try {
        if (typeof userInfo !== 'object') {
            return 'Please pass an object!'
        }

        const { email, password } = userInfo

        let data = {
            email: email,
            password: password,
        }

        data = JSON.stringify(data)

        let requestOptions = {
            method: 'POST',
            body: data,
            redirect: 'follow',
            headers: {
                'Content-Type': 'Application/json',
            },
        }

        const res = await fetch(
            'http://206.189.91.54//api/v1/auth/sign_in',
            requestOptions
        )

        const result = await res.json()

        if (result) {
            return result
        }
    } catch (err) {
        console.error(err.message)
    }
}

export default login