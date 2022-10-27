import { Avatar, Box, Button, Divider, Link, List, ListItem, ListItemAvatar, ListItemText, Menu, Typography } from '@mui/material'
import { BsBellFill } from 'react-icons/bs'
import useToggle from '@hooks/useToggle'
import { notificationData } from '@data/app.data'
import { notificationWrapper, inlineText } from '@styles/styles'
import React from 'react'

function Notifications() {
    const { open, el, handleClick, handleClose } = useToggle();
    return (
        <Box sx={{ px: 1 }}>
            <Button id="basic-notification-button" onClick={handleClick}>
                <BsBellFill size={24} />
            </Button>
            <Menu id="basic-notification-menu"
                anchorEl={el}
                open={open}
                onClose={handleClose}
                MenuListProps={{ 'aria-labelledby': 'basic-notification-button' }}
            >
                <List sx={notificationWrapper}>
                    {
                        notificationData.map((item) => {
                            return (
                                <Link href={item.url} key={item.id} underline="none">
                                    <ListItem sx={{ pt: 0, pb: 1, mt: 1 }} alignItems="flex-start">
                                        <ListItemAvatar>
                                            <Avatar alt={item.alt} src={item.avatar} />
                                        </ListItemAvatar>
                                        <ListItemText primary={item.text} secondary={
                                            <>
                                                <Box sx={{ mt: 2 }} component="span">
                                                    <Typography sx={inlineText} component="span">
                                                        {item.item}
                                                    </Typography>
                                                </Box>
                                            </>
                                        }>
                                        </ListItemText>
                                    </ListItem>
                                    {
                                        notificationData.length !== item.id && item.id && (
                                            <Divider variant='inset' component="li" />
                                        )
                                    }
                                </Link>
                            )
                        })
                    }
                </List>
            </Menu>
        </Box>
    )
}

export default Notifications
