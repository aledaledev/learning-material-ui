import React from "react";
import { Box, List, ListItem, ListItemButton, ListItemIcon,ListItemText} from "@mui/material";
import { Home, Newspaper, Group, Storefront, Person, Settings } from '@mui/icons-material'

const Sidebar = () => {
  return (
    <Box bgcolor={"background.default"} flex={1} p={2} sx={{ display:{xs:'none',md:'block'} }}>
        <Box position='sticky' sx={{top:'7rem'}}>
       <List>
          <ListItem disablePadding>
            <ListItemButton component='a' href='#home'>
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Homepage" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component='a' href='#list'>
              <ListItemIcon>
                <Newspaper />
              </ListItemIcon>
              <ListItemText primary="News" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component='a' href='#list'>
              <ListItemIcon>
                <Storefront />
              </ListItemIcon>
              <ListItemText primary="Store" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component='a' href='#list'>
              <ListItemIcon>
                <Group />
              </ListItemIcon>
              <ListItemText primary="Groups" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component='a' href='#list'>
              <ListItemIcon>
                <Person />
              </ListItemIcon>
              <ListItemText primary="Friends" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component='a' href='#list'>
              <ListItemIcon>
                <Settings />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
        </List>
        </Box>
    </Box>
  );
};

export default Sidebar;
