import { Container, Grid } from '@material-ui/core';
import React from 'react';
import styles from './BlogSection.module.scss';

const BlogSection = () => {
  return (
    <Container>
      <Grid container>
        <Grid item md={8} lg={8} sm={6} xs={12}></Grid>
        <Grid item md={4} lg={4} sm={6} xs={12}></Grid>
      </Grid>
    </Container>
  );
};

export default BlogSection;
