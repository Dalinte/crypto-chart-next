import ThemeToggleButton from "./ThemeToggleButton";

export default function RightContent() {
  return (
    <div className="w-64 bg-white dark:bg-black border-l border-gray-200 dark:border-gray-700 p-4">
      <h2 className="text-lg font-semibold mb-4">Действия</h2>
      <ThemeToggleButton />
    </div>
  );
}
