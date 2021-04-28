import React from 'react';
import { Card, CardActions, CardContent, Button, Typography } from '@material-ui/core/';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { useDispatch } from 'react-redux';
import moment from 'moment';

import { updateTask, taskDone, deleteTask } from '../../../actions/tasks';
import useStyles from './styles';

const Task = ({ task, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem('profile'));
  console.log(task);
  // const Likes = () => {
  //   if (task.likes.length > 0) {
  //     return task.likes.find((like) => like === (user?.result?.googleId || user?.result?.id))
  //       ? (
  //         <><ThumbUpAltIcon fontSize="small" />&nbsp;{task.likes.length > 2 ? `You and ${task.likes.length - 1} others` : `${task.likes.length} like${task.likes.length > 1 ? 's' : ''}` }</>
  //       ) : (
  //         <><ThumbUpAltOutlined fontSize="small" />&nbsp;{task.likes.length} {task.likes.length === 1 ? 'Like' : 'Likes'}</>
  //       );
  //   }

  //   return <><ThumbUpAltOutlined fontSize="small" />&nbsp;Like</>;
  // };

  return (
    <Card className={classes.card}>
      
      <div className={classes.overlay}>
        {/* <Typography variant="body2">{moment(task.createdAt).fromNow()}</Typography> */}
      </div>

      {/* {(user?.result?.googleId === task?.creator || user?.result?.id === task?.creator) && (
      <div className={classes.overlay2}>
        <Button onClick={() => setCurrentId(task.id)} style={{ color: 'black' }} size="small">
          <MoreHorizIcon fontSize="default" />
        </Button>
      </div>
      )} */}

      {/* <div className={classes.details}>
        <Typography variant="body2" color="textSecondary" component="h2">{task.tags.map((tag) => `#${tag} `)}</Typography>
      </div> */}

      <Typography className={classes.title} gutterBottom variant="h5" component="h2">{task.task}</Typography>
      
      {/* <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">{task.message}</Typography>
      </CardContent> */}

      <CardActions className={classes.cardActions}>
        
        {/* <Button size="small" color="primary" disabled={!user?.result} onClick={() => dispatch(taskDone(task.id))}>
          <taskDone />
        </Button> */}
        
        { 
        <Button size="small" color="primary" onClick={() => setCurrentId(task.id)}>
          <EditIcon fontSize="small" /> Edit
        </Button>
        }

        {
        <Button size="small" color="secondary" onClick={() => dispatch(deleteTask(task.id))}>
          <DeleteIcon fontSize="small" /> Delete
        </Button>
        }
        
      </CardActions>
    </Card>
  );
};

export default Task;
