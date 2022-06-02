import React, { useEffect, useState } from 'react'
import './channel.css'
import createChannelMembers from '../request/createChannelMembers'
import { connect } from 'react-redux'

function CreateChannel({ user }) {
  const [channelInput, setChannelInput] = useState('')


  useEffect(() => {

    if (Object.keys(user).length < 1) {
      return
    }


  }, [user])

  function handleChange(event) {
    const { value } = event.target
    setChannelInput(value)
  }

  function handleClick() {

    const fetch = async () => {

      try {
        const fetched = await createChannelMembers({
          accessToken: user.header.accessToken,
          client: user.header.client,
          expiry: user.header.expiry,
          uid: user.header.uid,
          channelName: channelInput,
          user_ids: [580], //make dynamic from the create UI
        })

        console.log(fetched)

      } catch (err) {
        console.error(err.message)
      }

    }

    fetch()

    setChannelInput('')
  }

  return (
    <div className="createChannel">
      <>
        <h1>Create a channel</h1>
        <input
          onChange={handleChange}
          placeholder="channel name"
          type="text"
          value={channelInput}
        ></input>
        <button onClick={handleClick}>Create</button>
      </>
    </div>
  )
}

const MapToStateProps = state => ({

  user: state.user

})

export default connect(MapToStateProps)(CreateChannel)
