import * as yup from 'yup';
export const getGroceries = async ({ setDataGroceries }) => {
  try {
    const res = await fetch('/api/waiting-list', {
      method: 'get',
    });
    const data = await res.json();

    setDataGroceries((prev) => ({
      ...prev,
      loading: false,
      data: data?.groceries,
      status: 201,
    }));
  } catch (error) {
    setDataGroceries((prev) => ({
      ...prev,
      loading: false,
      data: [],
      status: 500,
    }));
  }
};
const buildObjetYup = (groceries) => {
  let object = {};
  groceries.forEach((product) => {
    object = {
      ...object,
      [`quantity${product.id}`]: yup
        .number()
        .required('required')
        .min(1, 'must be greater than 0')
        .max(500, 'must be less than 500'),
    };
  });
  return object;
};

export const buildObjectFormik = (groceries) => {
  let object = {};
  groceries.forEach((product) => {
    object = {
      ...object,
      [`quantity${product.id}`]: product?.quantity || 0,
    };
  });
  return object;
};

export const configureYup = (groceries) => {
  const validationSchema = yup.object().shape({
    ...buildObjetYup(groceries),
  });
  return validationSchema;
};

export const calcule = (dataGroceries) => {
  let grossTotal = 0;
  dataGroceries.forEach((product) => {
    const quantity = product?.quantity || 0;
    const unitPrice = product?.unitPrice || 0;
    const totlaProduct = quantity * unitPrice;
    grossTotal = grossTotal + totlaProduct;
  });
  return {
    grossTotal,
    VAT: grossTotal * 0.2,
    total: grossTotal + grossTotal * 0.2,
  };
};

export const onRemoveProduct = ({ id, setDataGroceries }) => {
  setDataGroceries((prevState) => {
    const { data } = prevState;
    return {
      ...prevState,
      data: data.filter((product) => product.id !== id),
    };
  });
};

export const updateDataQuantity = ({ id, quantity, setDataGroceries }) => {
  setDataGroceries((prev) => {
    const dataGroceries = prev?.data || [];

    const newData = dataGroceries.map((product) => {
      if (id === product.id) {
        return {
          ...product,
          quantity: Number(quantity),
        };
      }
      return product;
    });

    return { ...prev, data: newData };
  });
};
