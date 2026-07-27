export function GlassCard({ children, className = "", noHover = false }: { children: React.ReactNode; className?: string; noHover?: boolean }) {
  return (
    <div className={`bg-white border-4 border-black p-8 ${noHover ? '' : 'hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[4px_4px_0_#000]'} transition-all duration-150 ${className}`}>
      {children}
    </div>
  );
}
