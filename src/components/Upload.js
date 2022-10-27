import { Box, Button, Menu, MenuItem, Typography } from '@mui/material'
import useToggle from '@hooks/useToggle'
import { RiVideoUploadFill } from 'react-icons/ri'
import { uploadMenuItems } from '@data/app.data'
import React from 'react'

function Upload() {
    const { el, open, handleClose, handleClick } = useToggle();
    return (
        <Box sx={{ px: 1 }}>
            <Button id="basic-upload-button" onClick={handleClick}>
                <RiVideoUploadFill size={24} />
            </Button>
            <Menu id="basic-upload-menu"
                anchorEl={el}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-upload-button'
                }}
            >
                {uploadMenuItems.map((item) => {
                    return (
                        <MenuItem key={item.id} onClick={handleClose}>
                            {item.icon && <Box sx={{ mr: 1 }}>
                                {item.icon}
                            </Box>
                            }
                            <Typography sx={{ textAlign: 'center', width: '100%' }} component="span">
                                {item.text}
                            </Typography>
                        </MenuItem>
                    )
                })}
            </Menu>
        </Box>
    )
}

export default Upload
