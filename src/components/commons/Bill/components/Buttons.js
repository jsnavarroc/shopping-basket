import React from 'react';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Card from './Card';
const useStyles = makeStyles(() =>
  createStyles({
    text: {
      fontSize: 15,
      margin: '5%',
    },
  })
);

const Buttons = ({ handleSubmit, totals, handleReset, onReset }) => {
  const { total } = totals;
  const classes = useStyles();
  return (
    <Card>
      <Grid>
        <Row>
          <Col xs={6}>
            <Button
              color="primary"
              style={{ width: '100%', height: '100%' }}
              onClick={() => {
                handleReset();
                onReset();
              }}
            >
              Clean
            </Button>
          </Col>
          <Col xs={6}>
            <Button
              onClick={handleSubmit}
              color="primary"
              variant="contained"
              style={{ width: '100%', height: '100%' }}
            >
              Check Out{' '}
              <NumberFormat
                className={classes.text}
                value={total}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'£'}
              />
            </Button>
          </Col>
        </Row>
      </Grid>
    </Card>
  );
};

Buttons.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleReset: PropTypes.func.isRequired,
  onReset: PropTypes.func.onReset,
  totals: PropTypes.object.isRequired,
};

export default Buttons;
