import { Modal, Button, Box, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import useSendPost from "../hooks/useSendPost";

const PostModal = ({ open, handleClose }) => {
  const { mutate: sendPost } = useSendPost();

  const onSubmit = (data) => {
    handleClose();
    // submit the post to db
    sendPost({ post: data.post });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <Modal open={open} onClose={handleClose}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "95vw",
            maxWidth: 400,
            height: 250,
            backgroundColor: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 2,
          }}
        >
          <Box
            sx={{ position: "absolute", top: 0, left: 0, padding: ".5em 1em" }}
          >
            <Typography variant="h5" color="lightgray" fontWeight="bold">
              New Post
            </Typography>
          </Box>
          <TextField
            label="Speak your mind"
            multiline
            variant="outlined"
            rows={3}
            inputProps={{ maxLength: 255 }}
            sx={{ width: "90%", marginTop: "1em" }}
            {...register("post", { required: "This field is required" })}
          />
          {errors.post && (
            <sub style={{ color: "red" }}>{errors.post.message}</sub>
          )}
          <Button
            type="submit"
            variant="contained"
            sx={{
              marginTop: "1em",
              backgroundColor: "#5a8a79",
              "&:hover": { backgroundColor: "#386857" },
            }}
          >
            Post
          </Button>
        </Box>
      </form>
    </Modal>
  );
};

export default PostModal;
