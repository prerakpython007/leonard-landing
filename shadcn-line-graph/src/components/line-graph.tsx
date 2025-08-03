import React from 'react';
import { Chart } from './ui/chart';
import { useChartData } from '../hooks/use-chart-data';

const LineGraph = () => {
  const { data, loading, error } = useChartData();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  return (
    <div className="line-graph">
      <Chart data={data} type="line" />
    </div>
  );
};

export default LineGraph;