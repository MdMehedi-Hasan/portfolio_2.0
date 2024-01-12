import React from 'react'
import { Box, Button, Modal, Typography } from '@mui/material'
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #27d280',
    borderRadius: '20px',
    boxShadow: 24,
    p: 4,
    textAlign:'center'
};
/* Drake #888888 #27d280*/
export default function HireModal({ open, setOpen }) {
    return (
        <Modal
            open={open}
            onClose={() => setOpen(!open)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2" sx={{fontWeight:'700'}}>
                    Eager to Elevate Your Team
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    I'm excited about the opportunity to bring my skills and enthusiasm to your team. Let's create something amazing together!
                </Typography>
            </Box>
        </Modal>
    )
}
