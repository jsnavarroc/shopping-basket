import React from 'react';
import PropTypes from 'prop-types';
import Buttons from './components/Buttons';
import Totals from './components/Totals';
import Product from './components/Product';
import Concept from './components/Concept';
import Card from './components/Card';
import useConfigureFormik from './hooks/useConfigFormik';

const Bill = (props) => {
  const { data, onRemoveProduct, onUpdateData, totals, onReset } = props;
  const { formik, addQuantity, removeQuantity } = useConfigureFormik({
    groceries: data,
    onUpdateData,
  });
  const { handleSubmit, handleReset } = formik;

  return (
    <>
      <Card>
        <Concept />
        {data.map((product, key) => {
          return (
            <Product
              key={`product-${key}`}
              product={product}
              formik={formik}
              latsPosition={key + 1 === data.length}
              onRemoveProduct={onRemoveProduct}
              addQuantity={addQuantity}
              removeQuantity={removeQuantity}
              onUpdateData={onUpdateData}
            />
          );
        })}
        <Totals totals={totals} formik={formik} />
      </Card>
      <Buttons
        totals={totals}
        handleSubmit={handleSubmit}
        handleReset={handleReset}
        onReset={onReset}
      />
    </>
  );
};

Bill.propTypes = {
  data: PropTypes.array.isRequired,
  totals: PropTypes.object.isRequired,
  onRemoveProduct: PropTypes.func.isRequired,
  onUpdateData: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
};

export default Bill;
