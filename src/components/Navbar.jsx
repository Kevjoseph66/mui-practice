import { AppBar, Avatar, Badge, InputBase, Menu, MenuItem, styled, Toolbar, Typography } from '@mui/material'
import PetsSharpIcon from '@mui/icons-material/PetsSharp';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import React, { useState } from 'react'



const StyleToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between',
})

const Search = styled('div')(({ theme }) => ({
    backgroundColor: 'white',
    padding: '0 10px',
    borderRadius: theme.shape.borderRadius,
    width: "40%"
}))
const Icons = styled('div')(({ theme }) => ({
    display: 'none',
    gap: "20px",
    alignItems: 'center',
    [theme.breakpoints.up('sm')]: {
        display: 'flex'
    }

}))
const UserBox = styled('div')(({ theme }) => ({
    display: 'flex',
    gap: "10px",
    alignItems: 'center',
    [theme.breakpoints.up('sm')]: {
        display: 'none'
    }

}))

const Navbar = () => {
    const [open,setOpen] = useState(false)
    return (
        <AppBar position='sticky'>
            <StyleToolbar><Typography variant="h6" sx={{ display: { xs: 'none', sm: 'block' } }}>PATO MACHO</Typography>
                <PetsSharpIcon sx={{ display: { xs: 'block', sm: 'none' } }} />
                <Search> <InputBase placeholder='Search...' /></Search>
                <Icons>
                    <Badge badgeContent={4} color="error">
                        <MailIcon />
                    </Badge>
                    <Badge badgeContent={2} color="error">
                        <NotificationsIcon />
                    </Badge>
                    <Avatar src='https://www.diethelmtravel.com/wp-content/uploads/2016/04/bill-gates-wealthiest-person.jpg' sx={{ width: '30px', height: '30px' }}  onClick={ e=> setOpen(true) }/>
                </Icons>
                <UserBox  onClick={ e=> setOpen(true) }>
                    <Avatar src='https://www.diethelmtravel.com/wp-content/uploads/2016/04/bill-gates-wealthiest-person.jpg' sx={{ width: '30px', height: '30px' }} />
                    <Typography variant="span" >John</Typography>

                </UserBox>
            </StyleToolbar>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                
                open={open}
                onClose={ (e)=> setOpen(false) }
              
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <MenuItem >Profile</MenuItem>
                <MenuItem >My account</MenuItem>
                <MenuItem >Logout</MenuItem>

            </Menu>

        </AppBar>
    )
}

export default Navbar