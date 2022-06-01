// desc : receive message from the user
// Parameter : pass object data with properties - { accessToken, client, expiry, uid, sender_id, receiver_class, reciever_id }

const retrieveMessage = async (userInfo) => {
  try {
    if (typeof userInfo !== 'object') {
      return 'Please pass an object!'
    }

    const {
      accessToken,
      client,
      expiry,
      uid,
      sender_id,
      receiver_class,
      receiver_id,
    } = userInfo

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
      `http://206.189.91.54//api/v1/messages?receiver_class=${receiver_class}&receiver_id=${receiver_id}$sender_id=${sender_id}`,
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

export default retrieveMessage
