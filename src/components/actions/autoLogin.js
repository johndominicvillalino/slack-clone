
const autoLogin = (userInfo) => async dispatch => {

    // console.log(userInfo)

    dispatch({
        type:'LOAD_USER',
        action: userInfo
    })


    

}

export default autoLogin