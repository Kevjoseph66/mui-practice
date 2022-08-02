import { Home } from '@mui/icons-material'
import Pages from '@mui/icons-material/Article'
import Group from '@mui/icons-material/Group';
import Marketplace from '@mui/icons-material/Storefront';
import Friend from '@mui/icons-material/Person';
import Settings from '@mui/icons-material/Settings';
import Profile from '@mui/icons-material/AccountBox';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import { Box, List, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'
import React from 'react'

const Sidebar = () => {
  return (
    <Box flex={1} p={2} sx={{ display: { xs: 'none', sm: 'block' } }}>

      <Box position="fixed">



        <List component="nav" aria-label="main mailbox folders">
          <ListItemButton component='a' href='#home'>
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary="HomePage" />
          </ListItemButton>

          <ListItemButton component='a' href='#pages'>
            <ListItemIcon>
              <Pages />
            </ListItemIcon>
            <ListItemText primary="Pages" />
          </ListItemButton>

          <ListItemButton component='a' href='#group'>
            <ListItemIcon>
              <Group />
            </ListItemIcon>
            <ListItemText primary="Group" />
          </ListItemButton>

          <ListItemButton component='a' href='#marketplace'>
            <ListItemIcon>
              <Marketplace />
            </ListItemIcon>
            <ListItemText primary="Marketplace" />
          </ListItemButton>

          <ListItemButton component='a' href='#friend'>
            <ListItemIcon>
              <Friend />
            </ListItemIcon>
            <ListItemText primary="Friends" />
          </ListItemButton>

          <ListItemButton component='a' href='#settings'>
            <ListItemIcon>
              <Settings />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItemButton>

          <ListItemButton component='a' href='#profile'>
            <ListItemIcon>
              <Profile />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItemButton>

          <ListItemButton component='a' href='#profile'>
            <ListItemIcon>
              <ModeNightIcon />
            </ListItemIcon>
            <Switch />
          </ListItemButton>

        </List>
      </Box>
    </Box>
  )
}

export default Sidebar