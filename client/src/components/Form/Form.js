import React, { useState } from "react";
import { Paper, TextField, Button, Typography } from "@material-ui/core";
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";

import useStyles from "./styles";

import { createPost } from "../../actions/posts";

const Form = () => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });

  const handleChange = (e) => {
    setPostData({ ...postData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(createPost(postData));
  };

  const clearInput = () => {};

  return (
    <Paper className={classes.paper}>
      <form
        autoComplete='off'
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant='h6'>Creating a Memory</Typography>
        <TextField
          fullWidth
          variant='outlined'
          className={classes.fileInput}
          label='Creator'
          name='creator'
          value={postData.creator}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          variant='outlined'
          className={classes.fileInput}
          label='Title'
          name='title'
          value={postData.title}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          variant='outlined'
          className={classes.fileInput}
          label='Message'
          name='message'
          value={postData.message}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          variant='outlined'
          className={classes.fileInput}
          label='Tags'
          name='tags'
          value={postData.tags}
          onChange={handleChange}
        />
        <div className={classes.fileInput}>
          <FileBase
            type='file'
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </div>
        <Button
          type='submit'
          variant='contained'
          color='primary'
          size='large'
          fullWidth
          className={classes.buttonSubmit}
        >
          Submit
        </Button>
        <Button
          type='button'
          variant='contained'
          color='secondary'
          size='small'
          onClick={clearInput}
          fullWidth
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
