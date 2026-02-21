import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { PriceScaleMode } from 'lightweight-charts';

interface ChartStore {
  chartMode: PriceScaleMode;
  setChartMode: (mode: PriceScaleMode) => void;
  toggleChartMode: () => void;
}

export const useChartStore = create<ChartStore>()(
  persist(
    (set) => ({
      chartMode: PriceScaleMode.Normal,
      setChartMode: (mode) => set({ chartMode: mode }),
      toggleChartMode: () => set((state) => ({
        chartMode: state.chartMode === PriceScaleMode.Logarithmic 
          ? PriceScaleMode.Normal 
          : PriceScaleMode.Logarithmic
      })),
    }),
    {
      name: 'chart-storage',
    }
  )
);
