export default function SimpleProgress({ value, color }: { value: number; color: string }) {
  return (
    <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
      <div
        className="h-full transition-all duration-1000 ease-out"
        style={{
          width: `${value}%`,
          backgroundColor: color,
        }}
      />
    </div>
  );
}