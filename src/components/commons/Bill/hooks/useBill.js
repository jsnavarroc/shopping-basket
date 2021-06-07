import { useEffect, useState } from 'react';
import {
  getGroceries,
  calcule,
  onRemoveProduct,
  updateDataQuantity,
} from './function';
const onReset = ({ setDataGroceries, setTotals }) => {
  setTotals({
    grossTotal: 0,
    VAT: 0,
    total: 0,
  });
  setDataGroceries((prev) => {
    const dataGroceries = prev?.data || [];
    const newData = dataGroceries.map((product) => {
      return {
        ...product,
        quantity: 0,
      };
    });
    return { ...prev, data: newData };
  });
};

const useBill = () => {
  const [dataGroceries, setDataGroceries] = useState({
    loading: true,
    error: '',
    data: [],
    status: 0,
  });
  const [totals, setTotals] = useState({
    grossTotal: 0,
    VAT: 0,
    total: 0,
  });
  useEffect(() => {
    getGroceries({ setDataGroceries });
  }, []);
  useEffect(() => {
    const result = calcule(dataGroceries.data);
    setTotals(result);
  }, [dataGroceries.data]);

  return {
    ...dataGroceries,
    onRemoveProduct: (id) => {
      onRemoveProduct({ id, setDataGroceries });
    },
    onUpdateData: ({ id, quantity }) => {
      updateDataQuantity({ id, quantity, setDataGroceries });
    },
    onReset: () => {
      onReset({ setTotals, setDataGroceries });
    },
    totals,
  };
};

export default useBill;
