'use client';

import { useChartStore } from '@/entities/chart/store/chartStore';
import { PriceScaleMode } from 'lightweight-charts';

export default function ChartDisplayToggle() {
  const { chartMode, setChartMode } = useChartStore();

  const isLogarithmic = chartMode === PriceScaleMode.Logarithmic;

  return (
    <div className="mt-4">
      <h3 className="text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
        Тип графика
      </h3>
      <div className="flex rounded-lg border border-gray-300 dark:border-gray-600 overflow-hidden">
        <button 
          className={`flex-1 px-3 py-2 text-sm transition-colors ${
            !isLogarithmic 
              ? 'bg-blue-500 text-white hover:bg-blue-600' 
              : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
          }`}
          onClick={() => setChartMode(PriceScaleMode.Normal)}
        >
          Обычный
        </button>
        <button 
          className={`flex-1 px-3 py-2 text-sm transition-colors ${
            isLogarithmic 
              ? 'bg-blue-500 text-white hover:bg-blue-600' 
              : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
          }`}
          onClick={() => setChartMode(PriceScaleMode.Logarithmic)}
        >
          Логарифмический
        </button>
      </div>
    </div>
  );
}
