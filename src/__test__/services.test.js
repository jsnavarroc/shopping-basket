import { describe, expect, test } from '@jest/globals';
import {
  configureYup,
  buildObjectFormik,
} from '../components/commons/Bill/hooks/function';

describe('Formik configuration', () => {
  test('Evaluate if the object from Yup is correct.', async () => {
    let groceries = [
      { id: 1, nameProduct: 'product 1', unitPrice: '2.5' },
      { id: 2, nameProduct: 'product 2', unitPrice: '1.5' },
      { id: 3, nameProduct: 'product 3', unitPrice: '1' },
    ];
    const expected = ['quantity3', 'quantity2', 'quantity1'];
    const objectYub = configureYup(groceries);
    expect(objectYub['_nodes']).toEqual(expect.arrayContaining(expected));
  });
  test('Analyze if the object of the formick inputs are correct.', async () => {
    let groceries = [
      { id: 1, nameProduct: 'product 1', unitPrice: '2.5' },
      { id: 2, nameProduct: 'product 2', unitPrice: '1.5' },
      { id: 3, nameProduct: 'product 3', unitPrice: '1' },
    ];
    const expected = { quantity1: 0, quantity2: 0, quantity3: 0 };
    const objectInputsFormic = buildObjectFormik(groceries);
    expect(objectInputsFormic).toEqual(expect.objectContaining(expected));
  });
});
