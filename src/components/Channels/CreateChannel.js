import React, { useEffect, useState } from 'react'
import './channel.css'
import createChannelMembers from '../request/createChannelMembers'
import { connect } from 'react-redux'

function CreateChannel({ user }) {
  const [channelInput, setChannelInput] = useState({
    name: '',
    id: '',
  })

  useEffect(() => {
    if (Object.keys(user).length < 1) {
      return
    }
  }, [user])

  function handleChange(event) {
    const { value, name } = event.target
    setChannelInput((input) => ({
      ...input,
      [name]: value,
    }))
  }

  function handleClick() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'))
    const fetch = async () => {
      try {
        const fetched = await createChannelMembers({
          accessToken: currentUser.headers.accessToken,
          client: currentUser.headers.client,
          expiry: currentUser.headers.expiry,
          uid: currentUser.headers.uid,
          channelName: channelInput.name,
          user_ids: [parseInt(channelInput.id)], //make dynamic from the create UI
        })

        if (fetched.errors) {
          alert(fetched.errors)
        } else {
          alert('success!')
        }
        console.log(fetched)
      } catch (err) {
        console.log(err)
      }
    }

    fetch()

    setChannelInput(() => ({
      name: '',
      id: '',
    }))
  }

  return (
    <div className="createChannel">
      <div>
        <h1>Create a channel</h1>
        <input
          onChange={handleChange}
          placeholder="channel name"
          type="text"
          name="name"
          value={channelInput.name}
        ></input>
        <input
          type="number"
          onChange={handleChange}
          placeholder="user ID"
          value={channelInput.id}
          name="id"
        ></input>
        <button onClick={handleClick}>Create</button>
      </div>
    </div>
  )
}

const MapToStateProps = (state) => ({
  user: state.user,
})

export default connect(MapToStateProps)(CreateChannel)
