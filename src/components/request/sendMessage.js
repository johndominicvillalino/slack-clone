// desc : send a direct message user
// Parameter : pass object data with properties - { accessToken, client, expiry, uid, message, receiver_id }
const sendMessage = async (userInfo) => {
  try {
    if (typeof userInfo !== 'object') {
      return 'Please pass an object!'
    }

    const { accessToken, client, expiry, uid, message, receiver_id } = userInfo

    let data = {
      receiver_id,
      receiver_class: 'User',
      body: message,
    }

    data = JSON.stringify(data)

    let requestOptions = {
      method: 'POST',
      body: data,
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
      'http://206.189.91.54//api/v1/messages',
      requestOptions
    )
    const result = await res.json()

    if (result) {
      return result
    }
  } catch (err) {
    console.error(err.message)
    return err.message
  }
}

export default sendMessage
