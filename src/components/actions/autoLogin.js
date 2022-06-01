
const autoLogin = (userInfo) => async dispatch => {
    dispatch({
        type:'LOAD_USER',
        action: userInfo
    })

}

export default autoLogin