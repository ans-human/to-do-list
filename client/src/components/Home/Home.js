import React, { useState, useEffect } from 'react';
import { Container, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { getTasks } from '../../actions/tasks';
import Tasks from '../Tasks/Tasks';
import Form from '../Form/Form';

const Home = () => {
  
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => { 
    dispatch(getTasks(JSON.parse(localStorage.getItem('profile'))?.result?.id));
  }, [currentId, dispatch]);

  return (
    <Grow in>
      <Container>
        <Grid container justify="space-between" alignItems="stretch" spacing={3}>
          <Grid item xs={12} sm={6}>
            <Tasks setCurrentId={setCurrentId} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Home;
