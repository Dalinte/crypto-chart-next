import { ChartContainer } from './ChartContainer';
import { cacheLife } from 'next/cache';
import { BASE_URL } from '@/shared/global.consts';
import { Candle } from '@/entities/chart/types';

interface ChartProps {
  symbol?: string;
}

const ChartWidget = async ({ symbol = 'BTC/USDC' }: ChartProps) => {
  'use cache';
  cacheLife('minutes');
  const response = await fetch(`${BASE_URL}/api/chart`);
  const candles: Candle[] = await response.json();

  return (
    <div className="chart-container">
      <div className="chart-header">
        <span className="chart-symbol">{symbol}</span>
      </div>
      <ChartContainer data={candles}></ChartContainer>
    </div>
  );
};

export default ChartWidget;
