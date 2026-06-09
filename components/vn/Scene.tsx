"use client";

export default function Scene({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-[#f5ebe0] relative overflow-hidden">
      {children}
    </div>
  );
}