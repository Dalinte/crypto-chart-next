import { create } from 'zustand';
import { PriceScaleMode } from 'lightweight-charts';

interface ChartStore {
  chartMode: PriceScaleMode;
  setChartMode: (mode: PriceScaleMode) => void;
  toggleChartMode: () => void;
}

export const useChartStore = create<ChartStore>()(
  (set) => ({
    chartMode: PriceScaleMode.Normal,
    setChartMode: (mode) => set({ chartMode: mode }),
    toggleChartMode: () => set((state) => ({
      chartMode: state.chartMode === PriceScaleMode.Logarithmic
        ? PriceScaleMode.Normal
        : PriceScaleMode.Logarithmic
    })),
  })
);
