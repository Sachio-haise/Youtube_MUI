import React from 'react'
import { AiFillYoutube } from 'react-icons/ai'
import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import { Menu } from '@mui/icons-material';
import SearchBar from './SearchBar';
import UserProfile from '@components/UserProfile'
import Notifications from '@components/Notifications'
import Upload from '@components/Upload'
import {
    appBar, toolbarWrapper, flexAlignCenter, logoText, hideOnMobile
} from '@styles/styles.js';

function AppNavMenu(props) {
    return (
        <AppBar component="nav" sx={appBar}>
            <Toolbar>
                <Box sx={toolbarWrapper}>
                    <Box sx={flexAlignCenter}>
                        <IconButton color='inherit' aria-label='open drawer' edge="start" sx={{ mr: 2 }} onClick={props.handleDrawerToggle}>
                            <Menu />
                        </IconButton>
                        <AiFillYoutube size={32} />
                        <Typography variant='h6' component="div" sx={logoText}>
                            Youtube
                        </Typography>
                    </Box>
                    <Box sx={hideOnMobile}>
                        <SearchBar />
                    </Box>
                    <Box sx={hideOnMobile}>
                        <Upload />
                        <Notifications />
                        <UserProfile />
                    </Box>
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default AppNavMenu