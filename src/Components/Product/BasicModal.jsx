import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

export default function BasicModal({ open, setOpen, handleClose,style}) {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h4" component="h2">
            Size
            <hr />
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <div className="d-flex flex-wrap">
              <div className="box-1">XS</div>
              <div className="box-1">S</div>
              <div className="box-1">M</div>
              <div className="box-1">L</div>
              <div className="box-1">XL</div>
            </div>
          </Typography>
          <hr />
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <button className="btn btn-dark py-2">ADD TO BAG</button>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}