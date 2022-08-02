import { Avatar, Button, ButtonGroup, Fab, Modal, Stack, TextField, Tooltip, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Add as AddIcon, DateRange, EmojiEmotions } from '@mui/icons-material'
import { Box } from '@mui/system';
import styled from '@emotion/styled';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import ImageIcon from '@mui/icons-material/Image';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';

const StyledModal = styled(Modal)({
    display: 'flex',
    justifyContent: "center",
    alignItems: "center",

})
const UserBox = styled(Box)({
    display: 'flex',
    alignItems: "center",
    gap: "10px",
    marginBottom: "20px"

})

const Add = () => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <Tooltip onClick={e => setOpen(true)} title="Delete" sx={{ position: 'fixed', bottom: 20, left: { xs: 'calc(50% - 25px)', md: 30 } }}>
                <Fab color="primary" aria-label="add" >
                    <AddIcon />
                </Fab>

            </Tooltip>
            <StyledModal
                open={open}
                onClose={e => setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box width={400} height={280} bgcolor="white" p={3} borderRadius={5}>
                    <Typography variant="h6" color="gray" textAlign="center">Create Post</Typography>
                    <UserBox>
                        <Avatar src="https://mui.com/static/images/avatar/3.jpg" sx={{ width: 30, height: 30 }} />
                        <Typography variant="span" fontFamily={500}>John Doe</Typography>

                    </UserBox>
                    <TextField sx={{ width: '100%' }}
                        id="standard-multiline-static"
                        multiline
                        rows={3}
                        placeholder="What's on your mind?"
                        variant="standard"
                    />
                    <Stack direction="row" gap={1} mt={2} mb={2}>
                        <EmojiEmotions color='primary' />
                        <VideoCameraBackIcon color='secondary' />
                        <ImageIcon color='success' />
                        <PersonAddIcon color='error' />

                    </Stack>
                    <ButtonGroup fullWidth variant="contained" aria-label="outlined primary button group">
                        <Button>Post</Button>
                        <Button sx={{width: '100px'}}><DateRange/></Button>
                       
                    </ButtonGroup>
                </Box>
            </StyledModal>
        </>
    )
}

export default Add