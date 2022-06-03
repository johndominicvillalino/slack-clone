import { ConstructionOutlined } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import recentDMs from '../request/recentDMs'
import { Link } from 'react-router-dom'

//      <Link to={`/123/direct/321`} >DMM</Link>
const DMList = ({ user }) => {

    const [allDms, setAllDms] = useState([])

    useEffect(() => {

        if (Object.keys(user).length < 1) {

            return
        }

        const fetchData = async () => {

            const { accessToken,
                client,
                expiry,
                uid } = user.headers


            try {
                const fetch = await recentDMs({
                    accessToken,
                    client,
                    expiry,
                    uid
                })


                if (fetch) {
                    setAllDms(fetch.data)

                }
            } catch (err) {
                console.error(err.message)

            }

        }
        fetchData()

    }, [user])



  


    return (
        <div className='channelList'>{allDms.map((e,i) => <Link key={i} to={`/${user.data.id}/direct/${e.id}`}>{e.id}</Link>)}</div>
    )
}

export default DMList