export function BackgroundCircles() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute left-0 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-green-500/40" />
      <div className="absolute left-[8%] top-[15%] h-12 w-12 rounded-full bg-brand-green-500/50" />
      <div className="absolute right-[4%] top-[20%] h-28 w-28 rounded-full bg-brand-green-500/50" />
      <div className="absolute bottom-[15%] right-[-5%] h-32 w-32 rounded-full bg-brand-green-500/40" />
      <div className="absolute bottom-[25%] left-[35%] h-20 w-20 rounded-full bg-brand-yellow" />
      <div className="absolute left-[12%] top-[45%] h-16 w-16 rounded-full bg-brand-yellow/60" />
    </div>
  );
}