import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import styles from './Dealer.module.scss';
import Fade from 'react-reveal/Fade';

const ShowLocation = ({ data, header }) => {
  return (
    <div>
      <div>
        <Fade bottom>
          <Typography
            variant="h5"
            color="initial"
            style={{ color: '#13488e', fontSize: '24px', fontWeight: 'bold' }}
          >
            {header}
          </Typography>
        </Fade>
        <div className={styles.underline}></div>
      </div>
      <Grid
        container
        spacing={2}
        direction="row"
        alignItems="center"
        alignContent="center"
        wrap="wrap"
      >
        {data?.map((el) => (
          <Grid key={Math.random().toString(36)} item md sm={2} xs={4}>
            <Typography
              variant="subtitle1"
              color="initial"
              className={styles.listname}
            >
              {el}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ShowLocation;
