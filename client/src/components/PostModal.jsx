import { Modal, Button, Box, TextField } from "@mui/material";

const PostModal = ({ open, handleClose }) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          height: 300,
          backgroundColor: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 2,
        }}
      >
        <TextField
          label="Post Content"
          multiline
          rows={3}
          sx={{ width: "90%" }}
        />
        <Button variant="contained" sx={{ marginTop: "1em" }}>
          Post
        </Button>
      </Box>
    </Modal>
  );
};

export default PostModal;
