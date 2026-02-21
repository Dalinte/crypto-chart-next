'use client'

import {
  createChart,
  ColorType,
  CandlestickSeries,
  PriceScaleMode,
  IChartApi,
} from 'lightweight-charts';
import { useEffect, useRef } from 'react';
import { Candle } from '../types';
import { useChartStore } from '@/store/chartStore';

const getCSSVariable = (variableName: string): string => {
  return getComputedStyle(document.documentElement).getPropertyValue(variableName).trim() || '';
};

interface ChartContainerProps {
  data: Candle[];
}

export const ChartContainer = (props: ChartContainerProps) => {
  const { data } = props;
  const { chartMode } = useChartStore();

  const chartContainerRef = useRef<HTMLDivElement | null>(null);
  const chartRef = useRef<IChartApi | null>(null);

  const updateChartScaleMode = (mode: PriceScaleMode) => {
    if (!chartRef.current) return;
    chartRef.current.applyOptions({
      rightPriceScale: {
        mode: mode,
      },
    });
  };

  useEffect(() => {
    updateChartScaleMode(chartMode);
  }, [chartMode])

  useEffect(() => {
    if (!chartContainerRef.current) return;

    const backgroundColor = getCSSVariable('--bg-secondary');
    const textColor = 'white';
    const chartHeight = parseInt(getCSSVariable('--chart-height')) || 600;

    const handleResize = () => {
      if (!chartContainerRef.current || !chartRef.current) return;
      const currentChartHeight = parseInt(getCSSVariable('--chart-height')) || 600;

      chartRef.current.applyOptions({
        width: chartContainerRef.current.clientWidth,
        height: currentChartHeight,
        rightPriceScale: {
          mode: chartMode,
        },
      });
    };

    const chart = createChart(chartContainerRef.current, {
      layout: {
        background: { type: ColorType.Solid, color: backgroundColor },
        textColor,
      },
      width: chartContainerRef.current.clientWidth,
      height: chartHeight,
      rightPriceScale: {
        mode: chartMode,
      },
    });

    chartRef.current = chart;

    chart.timeScale().fitContent();

    const newSeries = chart.addSeries(CandlestickSeries);
    newSeries.setData(data);

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      chart.remove();
    };
  }, [data]);

  useEffect(() => {
    if (chartRef.current) {
      chartRef.current.applyOptions({
        rightPriceScale: {
          mode: chartMode,
        },
      });
    }
  }, [chartMode]);

  return <div className={'chart-placeholder'} ref={chartContainerRef} />;
};
