import ChartPlaceholder from "@/components/ChartPlaceholder";
import RightContent from "@/components/RightContent";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-zinc-50 dark:bg-black">
      <main className="flex-1 p-6">
        <ChartPlaceholder />
      </main>
      <RightContent />
    </div>
  );
}
