import { ConstructionOutlined } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import './DM.css'
import recentDMs from '../request/recentDMs'
import { Link } from 'react-router-dom'

//      <Link to={`/123/direct/321`} >DMM</Link>
const DMList = ({ user }) => {
  const [allDms, setAllDms] = useState([])
  const [shortenDM, setShortenDM] = useState([])
  const [isChange, setIsChange] = useState(false)

  useEffect(() => {
    if (Object.keys(user).length < 1) {
      return
    }

    const fetchData = async () => {
      const { accessToken, client, expiry, uid } = user.headers

      try {
        const fetch = await recentDMs({
          accessToken,
          client,
          expiry,
          uid,
        })

        if (fetch) {
          setAllDms(fetch.data)
          const shorten = fetch.data.slice(0, 3)
          setShortenDM(shorten)
        }
      } catch (err) {
        console.error(err.message)
      }
    }
    fetchData()
  }, [user])

  function changeState() {
    isChange ? setIsChange(false) : setIsChange(true)
  }

  return (
    <div>
      <div className="changeState">
        <button onClick={changeState}> {!isChange ? '⮕' : '⬇'} </button>
        <p> &nbsp;&nbsp;Direct Messages</p>
      </div>

      <div className="messageList">
        {isChange
          ? allDms.map((e, i) => (
              <Link
                className="messages"
                key={i}
                to={`/${user.data.id}/direct/${e.id}`}
              >
                {e.uid}
              </Link>
            ))
          : shortenDM.map((e, i) => (
              <Link
                className="messages"
                key={i}
                to={`/${user.data.id}/direct/${e.id}`}
              >
                {e.uid}
              </Link>
            ))}
      </div>
    </div>
  )
}

export default DMList
