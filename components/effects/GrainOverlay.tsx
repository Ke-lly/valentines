export default function GrainOverlay() {
  return (
    <div
      className="fixed inset-0 opacity-[0.03] pointer-events-none z-[999]"
      style={{
        backgroundImage:
          "url('https://grainy-gradients.vercel.app/noise.svg')",
      }}
    />
  );
}