import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Grid, Row, Col } from 'react-flexbox-grid';
import NumberFormat from 'react-number-format';
import PropTypes from 'prop-types';
import Line from './Line';

const useStyles = makeStyles(() =>
  createStyles({
    textConcept: {
      fontSize: 15,
      margin: '5%',
      textAlign: 'initial',
    },
    text: {
      fontSize: 15,
      margin: '0%',
    },
    row: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: '0.3rem',
      marginBottom: '0.3rem',
    },
  })
);

const Totals = ({ totals }) => {
  const classes = useStyles();
  const { grossTotal, VAT, total } = totals;

  return (
    <>
      <Grid>
        <Row className={classes.row}>
          <Col xs={5}>
            <p className={classes.textConcept}>Gross total</p>
          </Col>
          <Col xs={7}>
            <NumberFormat
              className={classes.text}
              value={grossTotal}
              displayType={'text'}
              thousandSeparator={true}
              prefix={'£'}
            />
          </Col>
        </Row>
        <Line />
        <Row className={classes.row}>
          <Col xs={5}>
            <p className={classes.textConcept}>Total VAT</p>
          </Col>
          <Col xs={7}>
            <NumberFormat
              className={classes.text}
              value={VAT}
              displayType={'text'}
              decimalScale={3}
              thousandSeparator={true}
              prefix={'£'}
            />
          </Col>
        </Row>
        <Line />
        <Row className={classes.row}>
          <Col xs={5}>
            <p className={classes.textConcept}>Total</p>
          </Col>
          <Col xs={7}>
            <NumberFormat
              className={classes.text}
              value={total}
              displayType={'text'}
              thousandSeparator={true}
              prefix={'£'}
            />
          </Col>
        </Row>
      </Grid>

      <Line typeLine={'solid'} />
    </>
  );
};

export default Totals;

Totals.propTypes = {
  totals: PropTypes.object.isRequired,
};
