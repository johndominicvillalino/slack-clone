// desc = login
// Parameter : pass object data with properties - { email, password }

const login = (userInfo) => async dispatch =>{
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

    const headers = {
      accessToken : res.headers.get('access-token'),
      expiry: res.headers.get('expiry'),
      uid: res.headers.get('uid'),
      client: res.headers.get('client')
    }
 
    const result = await res.json()

    if (result) {
      result.headers = headers
      dispatch({
        type:'LOGIN',
        action: result
      })

      return result
    }
  } catch (err) {
    console.error(err.message)
  }
}

export default login
