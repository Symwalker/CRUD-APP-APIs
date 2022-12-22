import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
// import FormCmp from '../../components/FormCmp/AddUser';
import AddUser from '../../components/AddUse/AddUser';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  height :400,
  bgcolor: 'background.paper',
  border: '2px solid #3d3d3d',
  boxShadow: 24,
  p: 3,
};
// const modalinsodeStyle ={

// }

export default function ModalCmp() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button variant="contained" style={{margin:12}} onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <Typography variant='h3' sx={{textAlign : 'center'}}>
                Modal here
            </Typography>

       <AddUser />

        </Box>
      </Modal>
    </div>
  );
}