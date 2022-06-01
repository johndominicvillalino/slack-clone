import React, { useState } from 'react'
import './channel.css'
import createChannelMembers from '../request/createChannelMembers'

function CreateChannel({ setCreate }) {
  const [channelInput, setChannelInput] = useState('')

  function handleChange(event) {
    const { value } = event.target
    setChannelInput(value)
  }

  function handleClick() {
    setCreate(false)

    const fetch = async () => {
      const fetched = await createChannelMembers({
        accessToken: '7tREOoeLVJRq4XNO9IvkIQ',
        client: 'BN6ANeIefNoE8NHXldToIw',
        expiry: '1655277946',
        uid: 'user@example.com',
        channelName: channelInput,
        user_ids: [580],
      })
      if (fetched.errors) {
        alert(fetched.errors)
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

export default CreateChannel
