// desc = register
// Parameter : pass object data with properties - { email, password, password_confirmation }

const register = (userInfo) => async dispatch => {
  try {
    if (typeof userInfo !== 'object') {
      return 'Please pass an object!'
    }

    const { email, password, password_confirmation } = userInfo

    let data = {
      email: email,
      password: password,
      password_confirmation: password_confirmation,
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
      'http://206.189.91.54//api/v1/auth/',
      requestOptions
    )

    const headers = {
      accessToken : res.headers.get('access-token'),
      expiry: res.headers.get('expiry'),
      uid: res.headers.get('uid'),
      client: res.headers.get('client')
    }
    const result = await res.json()

    if (result) {
      result.headers = headers;
      return result
    }
  } catch (err) {
    console.error(err.message)
  }
}

export default register
