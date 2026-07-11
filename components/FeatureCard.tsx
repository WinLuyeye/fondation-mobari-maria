import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

export default function FeatureCard({
  title,
  description,
  icon: Icon,
}: FeatureCardProps) {
  return (
    <div className="border border-gray-100 p-10 text-center">
      <Icon className="mx-auto mb-6 h-10 w-10 text-yellow-500" />

      <h3 className="mb-4 text-2xl font-semibold text-black">{title}</h3>

      <p className="mb-6 text-sm leading-7 text-gray-500">
        {description}
      </p>

      <button className="text-sm font-medium text-gray-700 underline">
        Make a donation
      </button>
    </div>
  );
}