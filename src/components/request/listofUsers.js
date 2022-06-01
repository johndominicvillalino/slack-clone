// desc = list of users
// Parameter : pass object data with properties - { accessToken, client, expiry, uid, name, user_ids }

const listofUsers = async (userInfo) => {
  try {
    if (typeof userInfo !== 'object') {
      return 'Please pass an object!'
    }

    const { accessToken, client, expiry, uid } = userInfo

    let requestOptions = {
      method: 'GET',
      redirect: 'follow',
      headers: {
        'access-token': accessToken,
        client: client,
        expiry: expiry,
        uid: uid,
        'Content-Type': 'Application/json',
      },
    }

    const res = await fetch(
      'http://206.189.91.54//api/v1/users',
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

export default listofUsers
