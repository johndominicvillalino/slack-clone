import { login } from './login'


// desc : send a direct message user 

const sendMessage = async () => {

    try {

    const head = await login()

    if (head) {

        const accessToken = head.headers.get('access-token')
        const client = head.headers.get('client')
        const expiry = head.headers.get('expiry')
        const uid = head.headers.get('uid')

        let data = {
                    receiver_id:2077,
                    receiver_class: "User",
                    body:"test message 3"
                }

        data = JSON.stringify(data)

        let requestOptions = {
            method: 'POST',
            body: data,
            redirect: 'follow',
            headers: {
         
                'access-token': accessToken,
                'client': client,
                'expiry': expiry,
                'uid': uid,
                'Content-Type': 'Application/json'

            }   
          };

           const res =  await fetch("http://206.189.91.54//api/v1/messages", requestOptions)

           if(res) {
               console.log(await res.text())
           }
        
    }

    } catch (err) {
        console.error(err.message)

    }

}

export default sendMessage