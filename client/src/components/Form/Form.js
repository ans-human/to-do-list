import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
// import FileBase from 'react-file-base64';

import { createTask, updateTask } from '../../actions/tasks';
import useStyles from './styles';

const Form = ({ currentId, setCurrentId }) => {
  const [taskData, setTaskData] = useState({ title: ''});
  const task = useSelector((state) => (currentId ? state.tasks.find((task) => task.id === currentId) : null));
  const dispatch = useDispatch();
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem('profile'));
  
  useEffect(() => {
    if (task) setTaskData({title: task.task});
  }, [task]);

  const clear = () => {
    setCurrentId(0);
    setTaskData({ title: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(taskData);
    if (currentId === 0) {
      dispatch(createTask({ ...taskData, email: user?.result?.email }));
      clear();
    } else {
      dispatch(updateTask(currentId, { ...taskData, email: user?.result?.email }));
      clear();
    }
  };

  if (!user?.result?.name) {
    return (
      <Paper className={classes.paper}>
        <Typography variant="h6" align="center">
          Please Sign In to create your own to-do-list.
        </Typography>
      </Paper>
    );
  }

  return (
    <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h6">{currentId ? `Editing Task` : 'Add a Task'}</Typography>
        
        <TextField name="title" variant="outlined" label="Title" fullWidth value={taskData.title} onChange={(e) => setTaskData({ ...taskData, title: e.target.value })} />
        
        {/* <TextField name="message" variant="outlined" label="Message" fullWidth multiline rows={4} value={taskData.message} onChange={(e) => setTaskData({ ...taskData, message: e.target.value })} /> */}
        
        {/* <TextField name="tags" variant="outlined" label="Tags (coma separated)" fullWidth value={taskData.tags} onChange={(e) => setTaskData({ ...taskData, tags: e.target.value.split(',') })} /> */}
        
        {/* <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setTaskData({ ...taskData, selectedFile: base64 })} /></div> */}
       
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
        
        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
      </form>
    </Paper>
  );
};

export default Form;
