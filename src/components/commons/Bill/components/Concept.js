import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Line from './Line';

const useStyles = makeStyles(() =>
  createStyles({
    text: {
      fontSize: 15,
      margin: '5%',
    },
    row: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: '1rem',
      marginBottom: '1rem',
    },
  })
);

const Product = () => {
  const classes = useStyles();
  return (
    <>
      <Grid>
        <Row className={classes.row}>
          <Col xs={2.5}>
            <p className={classes.text}>Concept</p>
          </Col>
          <Col xs={2.5}>
            <p className={classes.text}>Quantity</p>
          </Col>
          <Col xs={2.5}>
            <p className={classes.text}>Unit cost</p>
          </Col>
          <Col xs={2.5}>
            <p className={classes.text}>Total cost</p>
          </Col>
          <Col xs={2.5} />
        </Row>
      </Grid>

      <Line typeLine={'solid'} />
    </>
  );
};

export default Product;
