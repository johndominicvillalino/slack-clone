import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Avatar } from '@mui/material'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import SearchIcon from '@mui/icons-material/Search'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import Box from '@mui/material/Box'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import login from '../../request/login'

const Header = () => {
  // {/* AVATAR */}
  const [anchorEl, setAnchorEl] = React.useState(null)
  const [active, setActive] = useState(true)
  const [userDetails, setUserDetails] = useState({
    email: '',
    image: '',
    id: '',
    uid: '',
  })
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)

    const fetch = async () => {
      const fetched = await login({
        email: 'user@example.com',
        password: '12345678',
      })
      const { id, email, uid, image } = fetched.data
      setActive(false)
      return setUserDetails(() => ({
        email: email,
        id: id,
        uid: uid,
        image: image,
      }))
    }

    active && fetch()
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  // {/* AVATAR END */}

  return (
    <HeaderContainer>
      {/* Header Left */}
      <HeaderLeft>
        <AccessTimeIcon />
      </HeaderLeft>

      {/* Header Search */}
      <HeaderSearch>
        <SearchIcon />
        <input placeholder="Search" />
      </HeaderSearch>

      {/* Header Right */}
      <HeaderRight>
        <HelpOutlineIcon />
      </HeaderRight>

      {/* AVATAR */}
      <React.Fragment>
        <Box
          sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}
        >
          <Tooltip title="Account settings">
            <IconButton
              onClick={handleClick}
              size="small"
              sx={{ ml: 2 }}
              aria-controls={open ? 'account-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
            >
              <Avatar
                src="https://pbs.twimg.com/profile_images/1523987597751726081/XuQeo7gC_400x400.jpg"
                sx={{ width: 32, height: 32, margin: '0 10px 0 0' }}
              ></Avatar>
            </IconButton>
          </Tooltip>
        </Box>
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              // padding: '0px 100px 0px 0px',
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '&:before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 10,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
          <MenuItem>
            <Avatar src="https://pbs.twimg.com/profile_images/1523987597751726081/XuQeo7gC_400x400.jpg" />
            {userDetails.email}
          </MenuItem>
          <MenuItem>Set yourself as away</MenuItem>
          <MenuItem>Pause notifications</MenuItem>
          <Divider />
          <MenuItem>Profile</MenuItem>
          <MenuItem>Preferences</MenuItem>
          <MenuItem>Sign out</MenuItem>
        </Menu>
      </React.Fragment>
      {/* AVATAR END */}
    </HeaderContainer>
  )
}

export default Header

const HeaderSearch = styled.div`
  flex: 0.4;
  opacity: 1;
  border-radius: 6px;
  background-color: #421f44;
  text-align: center;
  display: flex;
  padding: 0 50px;
  border: 1px gray solid;
  > input {
    background-color: transparent;
    border: none;
    text-align: center;
    min-width: 30vw;
    outline: 0;
    color: white;
  }
`

const HeaderContainer = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  background-color: var(--slack-color);
  color: white;
`

const HeaderLeft = styled.div`
  flex: 0.3;
  display: flex;
  align-items: center;
  margin-left: 20px;

  > .MuiSvgIcon-root {
    //Global ClassName in MUI
    margin-left: auto;
    margin-right: 30px;
  }
`

const HeaderRight = styled.div`
  flex: 0.3;
  display: flex;
  align-items: flex-end;

  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 20px;
  }
`
