// FeatureCard.tsx
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  index?: number;
}

export default function FeatureCard({
  title,
  description,
  icon: Icon,
  index = 0,
}: FeatureCardProps) {
  return (
    <div
      className="group relative p-8 text-center transition-all duration-500 hover:bg-yellow-400 overflow-hidden"
      style={{
        animation: `featureBorderGlow 3s ease-in-out ${index * 0.5}s infinite`,
      }}
    >
      {/* Ligne décorative animée en haut */}
      <div
        className="absolute top-0 left-1/2 h-1 w-0 bg-yellow-400 transition-all duration-500 group-hover:w-full group-hover:left-0"
        style={{
          transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      />

      <div
        className="mb-5 flex justify-center transition-transform duration-500 group-hover:scale-110"
        style={{
          animation: `featureIconFloat 3s ease-in-out ${index * 0.3}s infinite`,
        }}
      >
        <Icon
          size={45}
          className="text-yellow-500 transition-all duration-500 group-hover:text-black group-hover:rotate-6"
        />
      </div>

      <h3 className="mb-3 text-xl font-bold text-gray-900 transition-all duration-500 group-hover:scale-105">
        {title}
      </h3>

      <p className="text-sm leading-7 text-gray-600 transition-all duration-500 group-hover:text-gray-800">
        {description}
      </p>

      {/* Effet de brillance au survol */}
      <div
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(250, 204, 21, 0.05), transparent 70%)",
        }}
      />
    </div>
  );
}