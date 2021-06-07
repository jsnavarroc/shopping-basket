import React from 'react';
import Bill from './Bill';
import useBill from './hooks/useBill';
import Card from './components/Card';
import SkeletonSpiner from './components/SkeletonSpiner';
import Alert from './components/Alert';

const Main = () => {
  const billElements = useBill();
  const { loading, status } = billElements;

  if (status === 500)
    return (
      <Card>
        <Alert />
      </Card>
    );

  if (loading)
    return (
      <Card>
        <SkeletonSpiner />
      </Card>
    );

  if (status === 201) return <Bill {...billElements} />;
};
export default Main;
