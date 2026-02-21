import ChartWidget from './ChartWidget';
import {Suspense} from "react";

export default function ChartPlaceholder() {
  return (
    <div className="w-full h-full bg-gray-100 dark:bg-gray-800 rounded-lg">
      <Suspense fallback={<div>loading....</div>}>
        <ChartWidget />
      </Suspense>
    </div>
  );
}
