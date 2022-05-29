import {login} from './login'

const retreiveMessage = async () => {


        try {
    
        const head = await login()
    
        if (head) {
    
            const accessToken = head.headers.get('access-token')
            const client = head.headers.get('client')
            const expiry = head.headers.get('expiry')
            const uid = head.headers.get('uid')

           let id = await head.text()


           if(id) {
               id = JSON.parse(id)
               id = id.data.id
           }

    
            let requestOptions = {
                method  : 'GET',
                redirect: 'follow',
                headers: {
             
                    'access-token': accessToken,
                    'client': client,
                    'expiry': expiry,
                    'uid': uid,
                    'Content-Type': 'Application/json'
    
                }   
              };

              console.log(id)
    
            const res =  await fetch(`http://206.189.91.54//api/v1/messages?receiver_class=User&receiver_id=${2066}&sender_id=${id}`, requestOptions)
            const data = await res.text()
              
            if(data) {
                let dataReturn = JSON.parse(data)
                dataReturn = dataReturn.data
           
                return dataReturn
            }

 
             
      
        }
    
        } catch (err) {
            console.error(err.message)
    
        }



}

export default retreiveMessage