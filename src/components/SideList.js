import { Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material'
import {sideListWrapper} from '@styles/styles'
import {sideListItems} from '@data/app.data'
import React from 'react'

function SideList() {
  return (
    <Box sx={sideListWrapper}>
      {
        sideListItems.map(item => {
            return (
                <React.Fragment key={item.id}>
                  {
                    item.subdivision ? (
                        <>
                        <Divider/>
                        <Box sx={{ ml:2,mt:2 }}>
                           <Typography sx={{ textTransform:"uppercase",fontWeight:'bold' }} variant="button" gutterBottom>
                            {item.text}
                           </Typography>
                        </Box>
                        </>
                    ) : item.divider ? (
                           <Divider/>
                        ) : (
                            <nav aria-label='Side list items'>
                                <List sx={{ p:0 }}>
                                    <ListItem disablePadding>
                                        <ListItemButton>
                                            <ListItemIcon>{item.icon}</ListItemIcon>
                                            <ListItemText>{item.text}</ListItemText>
                                        </ListItemButton>
                                    </ListItem>
                                </List>
                            </nav>
                        )
                  }
                </React.Fragment>
            )
        })
      }
    </Box>
  )
}

export default SideList
