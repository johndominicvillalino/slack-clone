// desc = create a channel
// Parameter : pass object data with properties - { accessToken, client, expiry, uid, channelName, user_ids }

const createChannelMembers = async (userInfo) => {
  try {
    if (typeof userInfo !== 'object') {
      return 'Please pass an object!'
    }

    const { accessToken, client, expiry, uid, channelName, user_ids } = userInfo

    let data = {
      name: channelName,
      user_ids: [user_ids],
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
      'http://206.189.91.54//api/v1/channels',
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

export default createChannelMembers
