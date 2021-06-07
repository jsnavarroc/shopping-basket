// import { useEffect } from 'react';
import { useFormik } from 'formik';
import { configureYup, buildObjectFormik } from './function';

const useConfigFormik = ({ groceries, onUpdateData }) => {
  const initialValues = buildObjectFormik(groceries);
  const validationSchema = configureYup(groceries);

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      // eslint-disable-next-line no-console
      console.log('Persist>>>', values);
    },
  });
  const { setFieldValue, values } = formik;
  return {
    formik,
    addQuantity: ({ id, inputName }) => {
      const quantity = Number(values[inputName]) + 1;
      setFieldValue(inputName, quantity);
      onUpdateData({ id, quantity });
    },
    removeQuantity: ({ id, inputName }) => {
      const quantity = Number(values[inputName]) - 1;
      setFieldValue(inputName, quantity);
      onUpdateData({ id, quantity });
    },
  };
};

export default useConfigFormik;
