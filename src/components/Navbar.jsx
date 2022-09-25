import img from "../assets/me-2.png";
import React, { useState } from "react";
import {
  AppBar,
  styled,
  Toolbar,
  Typography,
  Menu,
  MenuItem,
  Box,
  InputBase,
  Badge,
  Avatar,
  Switch
} from "@mui/material";
import { FlashOn, Mail, SearchSharp, Notifications ,ModeNight } from "@mui/icons-material";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexDirection: "column",
  gap: "5px",
  padding: "10px",
});

const Search = styled("div")(() => ({
  backgroundColor: "white",
  padding: "0 5px",
}));

const Navbar = ({mode, setMode}) => {

    const [open, setOpen] = useState(false)

  return (
    <AppBar position="sticky">
      <StyledToolbar sx={{ flexDirection: { sm: "row" } }}>
        <Box sx={{ alignItems: "center", display: "flex" }}>
          <FlashOn />
          <Typography variant="h5" sx={{ display: "block" }}>
            SuperApp
          </Typography>
        </Box>

        <Box sx={{ alignItems: "center", display: "flex", gap: "30px" }}>
          <Search sx={{ alignItems: "center", display: "flex", borderRadius:'5px' }}>
            <SearchSharp color="primary" />
            <InputBase placeholder="search" />
          </Search>

          <Badge badgeContent={4} color="secondary">
            <Mail />
          </Badge>

          <Badge badgeContent={1} color="secondary">
            <Notifications />
          </Badge>

          <Avatar alt="aledaledev" onClick={e => setOpen(true)} src={img}/>
        </Box>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={e => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
        <MenuItem ><ModeNight color="secondary"/><Switch onChange={()=>setMode(mode==='dark'?'light':'dark')}/></MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;