import { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  description?: string;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  colorClass?: string;
}

export default function StatCard({ 
  title, 
  value, 
  icon: Icon, 
  description, 
  trend,
  colorClass = "bg-white text-black"
}: StatCardProps) {
  return (
    <div className={`p-6 border-4 border-black hard-shadow flex flex-col gap-4 ${colorClass}`}>
      <div className="flex items-center justify-between">
        <h3 className="font-bold uppercase tracking-widest text-sm opacity-80">{title}</h3>
        <Icon className="w-6 h-6" />
      </div>
      
      <div className="flex items-end gap-3">
        <span className="text-4xl lg:text-5xl font-black tracking-tighter leading-none">{value}</span>
        
        {trend && (
          <span className={`text-sm font-bold flex items-center ${trend.isPositive ? 'text-green-600' : 'text-red-600'}`}>
            {trend.isPositive ? '↑' : '↓'} {Math.abs(trend.value)}%
          </span>
        )}
      </div>

      {description && (
        <p className="text-sm font-bold opacity-70 mt-auto">{description}</p>
      )}
    </div>
  );
}
