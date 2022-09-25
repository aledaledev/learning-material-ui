import React, { useState } from "react";
import {
  Tooltip,
  Fab,
  Modal,
  styled,
  Typography,
  Box,
  Avatar,
  TextField,
  Stack
} from "@mui/material";
import { Add as AddIcon, AddPhotoAlternate , AttachFile, AddLocationAlt, PersonAdd, Send } from "@mui/icons-material";
import img from "../assets/me-2.png";

const CustomModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  margin: "10px 0",
});

export const Add = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('')
  return (
    <>
      <Tooltip
        title="new post"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50% - 1.5rem)", md: 30 },
        }}
        onClick={() => setOpen(true)}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <CustomModal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          width={350}
          height={280}
          bgcolor="background.default" 
          color="text.primary"
          p={3}
          borderRadius={5}
        >
          <Typography variant="h6" color="gray" textAlign="center">
            New Post
          </Typography>
          <UserBox>
            <Avatar src={img} sx={{ width: 30, height: 30 }} />
            <Typography>aledaledev</Typography>  
          </UserBox>
          <TextField
              sx={{width:'100%',
              margin:"10px 0"
            }}
              multiline
              placeholder="Whats happening?"
              rows={5}
              value={value}
              onChange={e=>setValue(e.this.value)}
            />
            <Stack direction="row" spacing={2} color='gray'>
              <Send color='primary'/>
              <PersonAdd />
              <AddPhotoAlternate/>
              <AttachFile/>
              <AddLocationAlt/>
            </Stack>
        </Box>
      </CustomModal>
    </>
  );
};
