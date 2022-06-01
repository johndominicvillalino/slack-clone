// desc = register
// Parameter : pass object data with properties - { email, password, password_confirmation }

const register = async (userInfo) => {
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

    const result = await res.json()

    if (result) {
      return result
    }
  } catch (err) {
    console.error(err.message)
  }
}

export default register
