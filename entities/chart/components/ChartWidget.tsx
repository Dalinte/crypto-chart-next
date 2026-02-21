import { ChartContainer} from './ChartContainer';
import { candlestickData } from './../mock/candlesticks';

interface ChartProps {
  symbol?: string;
}

export function ChartWidget({ symbol = 'BTC/USDC' }: ChartProps) {
  return (
    <div className="chart-container">
      <div className="chart-header">
        <span className="chart-symbol">{symbol}</span>
      </div>
      <ChartContainer data={candlestickData}></ChartContainer>
    </div>
  );
}
