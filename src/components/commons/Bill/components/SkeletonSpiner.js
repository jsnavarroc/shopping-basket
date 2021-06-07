import React from 'react';

import Typography from '@material-ui/core/Typography';
import Skeleton from '@material-ui/lab/Skeleton';
import Grid from '@material-ui/core/Grid';

export default function SkeletonSpiner() {
  return (
    <Grid container spacing={8}>
      <Grid item xs>
        <Typography component="div" variant={'h1'}>
          <Skeleton />
        </Typography>
        <Typography component="div" variant={'h1'}>
          <Skeleton />
        </Typography>
      </Grid>
    </Grid>
  );
}
