import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import { Add, Remove, CancelTwoTone } from '@material-ui/icons';
import { TextField } from '@material-ui/core';
import NumberFormat from 'react-number-format';
import { Grid, Row, Col } from 'react-flexbox-grid';
import PropTypes from 'prop-types';
import Line from './Line';

const useStyles = makeStyles(() =>
  createStyles({
    text: {
      fontSize: 15,
      margin: '5%',
    },
    products: {
      paddingBottom: '0.5rem',
      marginTop: '0.5rem',
    },
    sendButton: {
      maxHeight: '20px',
      minHeight: '20px',
      minWidth: '20px',
      maxWidth: '20px',
      margin: '4%',
    },
    row: {
      justifyContent: 'center',
      alignItems: 'center',
    },
  })
);

const Product = (props) => {
  const {
    product,
    formik,
    onRemoveProduct,
    latsPosition,
    addQuantity,
    removeQuantity,
    onUpdateData,
  } = props;
  const classes = useStyles();
  const { handleBlur, values, setFieldValue, touched, errors, isSubmitting } =
    formik;
  const inputName = `quantity${product.id}`;
  const totalValueUnit = Number(values[inputName]) * Number(product.unitPrice);
  const hasError =
    (touched[inputName] || isSubmitting) && errors[inputName] ? true : false;

  return (
    <>
      <Grid className={classes.products}>
        <Row className={classes.row}>
          <Col xs={2.5}>
            <p className={classes.text}>{product.nameProduct}</p>
          </Col>
          <Col xs={2.5} onBlur={handleBlur(inputName)}>
            <Fab
              className={classes.sendButton}
              onClick={() => {
                removeQuantity({ id: product.id, inputName });
              }}
            >
              <Remove fontSize={'small'} />
            </Fab>

            <NumberFormat
              customInput={TextField}
              format="####"
              value={values[inputName]}
              error={hasError}
              helperText={hasError ? errors[inputName] : ''}
              onChange={(e) => {
                onUpdateData({ id: product.id, quantity: e.target.value });
                setFieldValue(inputName, e.target.value);
              }}
              name={inputName}
              style={{ width: '31%', fontSize: 15 }}
            />
            <Fab
              className={classes.sendButton}
              onClick={() => {
                addQuantity({ id: product.id, inputName });
              }}
            >
              <Add fontSize={'small'} />
            </Fab>
          </Col>
          <Col xs={2.5}>
            <NumberFormat
              className={classes.text}
              displayType={'text'}
              thousandSeparator={true}
              prefix={'£'}
              value={product.unitPrice}
            />
          </Col>
          <Col xs={2.5}>
            <NumberFormat
              className={classes.text}
              value={totalValueUnit}
              displayType={'text'}
              thousandSeparator={true}
              prefix={'£'}
            />
          </Col>
          <Col xs={2.5}>
            <Fab
              className={classes.sendButton}
              onClick={() => onRemoveProduct(product.id)}
            >
              <CancelTwoTone fontSize={'small'} />
            </Fab>
          </Col>
        </Row>
      </Grid>
      {latsPosition ? <Line typeLine={'solid'} /> : <Line />}
    </>
  );
};

Product.defaultProps = {
  product: { id: 1, nameProduct: 'product 1', price: '2.5' },
};

Product.propTypes = {
  product: PropTypes.object.isRequired,
  formik: PropTypes.object.isRequired,
  latsPosition: PropTypes.bool.isRequired,
  onRemoveProduct: PropTypes.func.isRequired,
  removeQuantity: PropTypes.func.isRequired,
  addQuantity: PropTypes.func.isRequired,
  onUpdateData: PropTypes.func.isRequired,
};
export default Product;
