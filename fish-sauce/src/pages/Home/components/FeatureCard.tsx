import MaterialIcon from "./MaterialIcon";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

export default function FeatureCard({
  icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <div className="md:col-span-4 bg-surface-container-low border border-outline-variant/30 rounded-xl p-md text-center hover:shadow-lg transition-all duration-300">
      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-md">
        <MaterialIcon name={icon} className="text-primary" />
      </div>
      <h4 className="font-headline text-headline-md text-primary mb-xs">
        {title}
      </h4>
      <p className="text-body-md text-on-surface-variant">{description}</p>
    </div>
  );
}
