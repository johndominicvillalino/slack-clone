import React, { useEffect, useState } from 'react'
import './channel.css'
import createChannelMembers from '../request/createChannelMembers'
import { connect } from 'react-redux'
import force from '../actions/force'
import { useHistory } from 'react-router-dom'

function CreateChannel({ user, force }) {
  let history = useHistory()
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
    const fetch = async () => {
      try {
        const fetched = await createChannelMembers({
          accessToken: user.headers.accessToken,
          client: user.headers.client,
          expiry: user.headers.expiry,
          uid: user.headers.uid,
          channelName: channelInput.name,
          user_ids: [parseInt(channelInput.id)], //make dynamic from the create UI
        })

        if (!fetched.errors) {
          // alert(fetched.errors)
          console.log(fetched)
        } else {
          console.log(fetched)
        }

        await force()
      } catch (err) {
        console.error(err.message)
      }
    }

    fetch()
    setChannelInput(() => ({
      name: '',
      id: '',
    }))

    history.push(`/${user.data.id}/client`)
  }

  function redirectToClient() {
    history.push(`/${user.data.id}/client`)
  }

  return (
    <div className="createChannel">
      <div>
        <button onClick={redirectToClient} className="close">
          {' '}
          X{' '}
        </button>
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

export default connect(MapToStateProps, { force })(CreateChannel)
