export default function GlowBackground() {
  return (
    <>
      <div className="fixed top-[-200px] left-[-200px] w-[600px] h-[600px] bg-[#7a5c4d]/20 blur-3xl rounded-full pointer-events-none" />

      <div className="fixed bottom-[-200px] right-[-200px] w-[600px] h-[600px] bg-[#d4c1a7]/10 blur-3xl rounded-full pointer-events-none" />
    </>
  );
}